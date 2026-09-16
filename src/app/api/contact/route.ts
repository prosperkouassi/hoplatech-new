// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";

import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";

/* =========================================================
   VARIABLES D'ENVIRONNEMENT
========================================================= */

const requiredEnvVariables = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "CONTACT_NOTIFICATION_EMAIL",
] as const;

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    throw new Error(
      `Variable d'environnement manquante : ${variable}`
    );
  }
}

/* =========================================================
   MYSQL
========================================================= */

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT ?? 3306),

  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,

  ssl: {
    rejectUnauthorized: false,
  },
});

/* =========================================================
   SMTP / NODEMAILER
========================================================= */

const smtpPort = Number(process.env.SMTP_PORT ?? 465);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

/* =========================================================
   UPSTASH / RATE LIMIT
========================================================= */

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,

  limiter: Ratelimit.slidingWindow(
    5,
    "10 m"
  ),

  prefix: "alteractweb:contact",
});

/* =========================================================
   LIMITES DES CHAMPS
========================================================= */

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 30;
const MAX_COMPANY_LENGTH = 150;
const MAX_SECTOR_LENGTH = 100;
const MAX_SOLUTION_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

/* =========================================================
   UTILITAIRES
========================================================= */

function cleanString(
  value: unknown
): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

/*
 * Échappement HTML pour éviter qu'un utilisateur
 * puisse injecter du HTML dans l'e-mail reçu.
 */
function escapeHtml(
  value: string
): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientIp(
  request: NextRequest
): string {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    const firstIp =
      forwardedFor
        .split(",")[0]
        ?.trim();

    if (firstIp) {
      return firstIp;
    }
  }

  const realIp =
    request.headers.get(
      "x-real-ip"
    );

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

/* =========================================================
   POST /api/contact
========================================================= */

export async function POST(
  request: NextRequest
) {
  try {
    /* =====================================================
       LECTURE DU BODY
    ===================================================== */

    let body: unknown;

    try {
      body =
        await request.json();
    } catch {
      return NextResponse.json(
        {
          error:
            "Requête invalide.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        {
          error:
            "Données invalides.",
        },
        {
          status: 400,
        }
      );
    }

    const data =
      body as Record<
        string,
        unknown
      >;

    /* =====================================================
       NETTOYAGE DES DONNÉES
    ===================================================== */

    const prenom =
      cleanString(data.prenom);

    const nom =
      cleanString(data.nom);

    const email =
      cleanString(
        data.email
      ).toLowerCase();

    const telephone =
      cleanString(
        data.telephone
      );

    const entreprise =
      cleanString(
        data.entreprise
      );

    const secteur =
      cleanString(
        data.secteur
      );

    const solution =
      cleanString(
        data.solution
      );

    const message =
      cleanString(
        data.message
      );

    const consent =
      data.consent === true;

    /* =====================================================
       HONEYPOT ANTI-SPAM
    ===================================================== */

    /*
     * Le champ "website" doit rester vide.
     *
     * Les robots remplissent souvent automatiquement
     * tous les champs d'un formulaire.
     *
     * Si ce champ est rempli, on simule une réussite,
     * mais aucune donnée n'est enregistrée.
     */

    const website =
      cleanString(
        data.website
      );

    if (website) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 201,
        }
      );
    }

    /* =====================================================
       VALIDATION DES CHAMPS OBLIGATOIRES
    ===================================================== */

    if (
      !prenom ||
      !nom ||
      !email ||
      !message ||
      !consent
    ) {
      return NextResponse.json(
        {
          error:
            "Veuillez remplir tous les champs obligatoires.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       VALIDATION EMAIL
    ===================================================== */

    if (
      !isValidEmail(email)
    ) {
      return NextResponse.json(
        {
          error:
            "L'adresse e-mail est invalide.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       VALIDATION DES LONGUEURS
    ===================================================== */

    if (
      prenom.length >
        MAX_NAME_LENGTH ||
      nom.length >
        MAX_NAME_LENGTH ||
      email.length >
        MAX_EMAIL_LENGTH ||
      telephone.length >
        MAX_PHONE_LENGTH ||
      entreprise.length >
        MAX_COMPANY_LENGTH ||
      secteur.length >
        MAX_SECTOR_LENGTH ||
      solution.length >
        MAX_SOLUTION_LENGTH ||
      message.length >
        MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        {
          error:
            "Certaines données dépassent la longueur autorisée.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       RATE LIMITING
    ===================================================== */

    /*
     * Maximum :
     *
     * 5 requêtes valides
     * par période glissante de 10 minutes
     * pour une même adresse IP.
     */

    const ip =
      getClientIp(request);

    const rateLimitResult =
      await ratelimit.limit(ip);

    if (
      !rateLimitResult.success
    ) {
      return NextResponse.json(
        {
          error:
            "Trop de demandes ont été envoyées. Veuillez réessayer dans quelques minutes.",
        },
        {
          status: 429,

          headers: {
            "X-RateLimit-Limit":
              String(
                rateLimitResult.limit
              ),

            "X-RateLimit-Remaining":
              String(
                rateLimitResult.remaining
              ),

            "X-RateLimit-Reset":
              String(
                rateLimitResult.reset
              ),
          },
        }
      );
    }

    /* =====================================================
       ENREGISTREMENT MYSQL
    ===================================================== */

    /*
     * Le lead est enregistré AVANT l'envoi
     * de la notification email.
     *
     * Ainsi, une panne SMTP ne peut pas faire
     * perdre une demande commerciale.
     */

    const [result] =
      await pool.execute<mysql.ResultSetHeader>(
        `
        INSERT INTO hopla_leads
        (
          first_name,
          last_name,
          email,
          phone,
          company_name,
          sector,
          solution_slug,
          message,
          consent_at,
          created_at,
          updated_at
        )
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())
        `,
        [
          prenom,
          nom,
          email,
          telephone || null,
          entreprise || null,
          secteur || null,
          solution || null,
          message,
        ]
      );

    /* =====================================================
       NOTIFICATION EMAIL
    ===================================================== */

    /*
     * Important :
     *
     * Si l'envoi de l'e-mail échoue,
     * le lead reste enregistré dans MySQL.
     *
     * On journalise simplement l'erreur SMTP.
     */

    try {
      /*
       * Valeurs sécurisées pour le contenu HTML.
       */

      const safePrenom =
        escapeHtml(prenom);

      const safeNom =
        escapeHtml(nom);

      const safeEmail =
        escapeHtml(email);

      const safeTelephone =
        escapeHtml(
          telephone ||
            "Non renseigné"
        );

      const safeEntreprise =
        escapeHtml(
          entreprise ||
            "Non renseignée"
        );

      const safeSecteur =
        escapeHtml(
          secteur ||
            "Non renseigné"
        );

      const safeSolution =
        escapeHtml(
          solution ||
            "Non renseignée"
        );

      const safeMessage =
        escapeHtml(message);

      await transporter.sendMail({
        /*
         * L'expéditeur doit correspondre
         * au compte SMTP Hostinger.
         */

        from:
          `"AlteractWeb — Nouveau lead" <${process.env.SMTP_USER}>`,

        /*
         * Destinataire de la notification.
         */

        to:
          process.env
            .CONTACT_NOTIFICATION_EMAIL,

        /*
         * Très pratique :
         *
         * lorsque Prosper clique sur "Répondre"
         * dans sa messagerie, la réponse part
         * directement vers le prospect.
         */

        replyTo: email,

        subject:
          `Nouveau lead AlteractWeb — ${prenom} ${nom}`,

        /* =================================================
           VERSION TEXTE
        ================================================= */

        text: `
NOUVEAU LEAD ALTERACTWEB

Une nouvelle demande a été envoyée depuis AlteractWeb.com.

----------------------------------------

Prénom : ${prenom}
Nom : ${nom}
E-mail : ${email}
Téléphone : ${telephone || "Non renseigné"}
Entreprise : ${entreprise || "Non renseignée"}
Secteur : ${secteur || "Non renseigné"}
Solution : ${solution || "Non renseignée"}

----------------------------------------

MESSAGE

${message}

----------------------------------------

Lead #${result.insertId}

Retrouvez également cette demande dans le back-office AlteractWeb.
        `.trim(),

        /* =================================================
           VERSION HTML
        ================================================= */

        html: `
          <div
            style="
              margin:0;
              padding:0;
              background:#f5f5f5;
              font-family:Arial,Helvetica,sans-serif;
              color:#1f2937;
            "
          >

            <div
              style="
                max-width:650px;
                margin:0 auto;
                padding:32px 20px;
              "
            >

              <div
                style="
                  background:#ffffff;
                  border-radius:12px;
                  overflow:hidden;
                  border:1px solid #e5e7eb;
                "
              >

                <!-- HEADER -->

                <div
                  style="
                    padding:28px 32px;
                    background:#111827;
                    color:#ffffff;
                  "
                >

                  <div
                    style="
                      font-size:13px;
                      text-transform:uppercase;
                      letter-spacing:1px;
                      opacity:0.75;
                      margin-bottom:8px;
                    "
                  >
                    AlteractWeb
                  </div>

                  <div
                    style="
                      font-size:24px;
                      font-weight:700;
                    "
                  >
                    Nouveau lead
                  </div>

                </div>

                <!-- CONTENU -->

                <div
                  style="
                    padding:32px;
                  "
                >

                  <p
                    style="
                      margin-top:0;
                      margin-bottom:28px;
                      color:#6b7280;
                      line-height:1.6;
                    "
                  >
                    Une nouvelle demande a été envoyée depuis
                    le formulaire de contact AlteractWeb.
                  </p>

                  <!-- INFORMATIONS -->

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse:collapse;
                      font-size:15px;
                    "
                  >

                    <tr>
                      <td
                        style="
                          padding:10px 0;
                          width:145px;
                          color:#6b7280;
                        "
                      >
                        Contact
                      </td>

                      <td
                        style="
                          padding:10px 0;
                          font-weight:600;
                        "
                      >
                        ${safePrenom} ${safeNom}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:10px 0;
                          color:#6b7280;
                        "
                      >
                        E-mail
                      </td>

                      <td
                        style="
                          padding:10px 0;
                        "
                      >
                        <a
                          href="mailto:${safeEmail}"
                          style="
                            color:#111827;
                            text-decoration:none;
                          "
                        >
                          ${safeEmail}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:10px 0;
                          color:#6b7280;
                        "
                      >
                        Téléphone
                      </td>

                      <td
                        style="
                          padding:10px 0;
                        "
                      >
                        ${safeTelephone}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:10px 0;
                          color:#6b7280;
                        "
                      >
                        Entreprise
                      </td>

                      <td
                        style="
                          padding:10px 0;
                        "
                      >
                        ${safeEntreprise}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:10px 0;
                          color:#6b7280;
                        "
                      >
                        Secteur
                      </td>

                      <td
                        style="
                          padding:10px 0;
                        "
                      >
                        ${safeSecteur}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:10px 0;
                          color:#6b7280;
                        "
                      >
                        Solution
                      </td>

                      <td
                        style="
                          padding:10px 0;
                        "
                      >
                        ${safeSolution}
                      </td>
                    </tr>

                  </table>

                  <!-- MESSAGE -->

                  <div
                    style="
                      margin-top:30px;
                      padding-top:28px;
                      border-top:1px solid #e5e7eb;
                    "
                  >

                    <div
                      style="
                        font-size:13px;
                        font-weight:700;
                        text-transform:uppercase;
                        letter-spacing:0.7px;
                        color:#6b7280;
                        margin-bottom:14px;
                      "
                    >
                      Message
                    </div>

                    <div
                      style="
                        padding:20px;
                        background:#f9fafb;
                        border-radius:8px;
                        line-height:1.7;
                        white-space:pre-line;
                      "
                    >${safeMessage}</div>

                  </div>

                  <!-- LEAD ID -->

                  <div
                    style="
                      margin-top:28px;
                      font-size:13px;
                      color:#9ca3af;
                    "
                  >
                    Lead #${result.insertId}
                  </div>

                </div>

                <!-- FOOTER -->

                <div
                  style="
                    padding:20px 32px;
                    background:#f9fafb;
                    border-top:1px solid #e5e7eb;
                    font-size:12px;
                    color:#9ca3af;
                  "
                >
                  Cette demande est également enregistrée
                  dans le back-office AlteractWeb.
                </div>

              </div>

            </div>

          </div>
        `,
      });

      console.log(
        `Notification email envoyée pour le lead #${result.insertId}`
      );
    } catch (emailError) {
      /*
       * L'enregistrement MySQL a déjà réussi.
       * On ne renvoie donc PAS une erreur au visiteur.
       */

      console.error(
        `Lead #${result.insertId} enregistré mais notification email non envoyée :`,
        emailError instanceof Error
          ? emailError.message
          : "Erreur SMTP inconnue"
      );
    }

    /* =====================================================
       RÉPONSE AU FRONT
    ===================================================== */

    return NextResponse.json(
      {
        success: true,
        id: result.insertId,
      },
      {
        status: 201,

        headers: {
          "X-RateLimit-Limit":
            String(
              rateLimitResult.limit
            ),

          "X-RateLimit-Remaining":
            String(
              rateLimitResult.remaining
            ),

          "X-RateLimit-Reset":
            String(
              rateLimitResult.reset
            ),
        },
      }
    );
  } catch (error) {
    /* =====================================================
       ERREUR GLOBALE
    ===================================================== */

    console.error(
      "Erreur API contact:",
      error instanceof Error
        ? error.message
        : "Erreur inconnue"
    );

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      },
      {
        status: 500,
      }
    );
  }
}