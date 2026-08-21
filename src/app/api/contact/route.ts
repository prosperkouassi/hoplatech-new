// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";

const requiredEnvVariables = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
] as const;

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    throw new Error(`Variable d'environnement manquante : ${variable}`);
  }
}

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

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  prefix: "alteractweb:contact",
});

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 30;
const MAX_COMPANY_LENGTH = 150;
const MAX_SECTOR_LENGTH = 100;
const MAX_SOLUTION_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();

    if (firstIp) {
      return firstIp;
    }
  }

  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Requête invalide." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Données invalides." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const prenom = cleanString(data.prenom);
    const nom = cleanString(data.nom);
    const email = cleanString(data.email).toLowerCase();
    const telephone = cleanString(data.telephone);
    const entreprise = cleanString(data.entreprise);
    const secteur = cleanString(data.secteur);
    const solution = cleanString(data.solution);
    const message = cleanString(data.message);
    const consent = data.consent === true;

    /*
     * Honeypot anti-spam
     *
     * Le champ "website" est invisible pour les utilisateurs normaux.
     * S'il est rempli, on simule volontairement une réponse positive
     * sans écrire quoi que ce soit dans la base de données.
     */
    const website = cleanString(data.website);

    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 201 }
      );
    }

    /*
     * Validation des champs obligatoires
     */
    if (!prenom || !nom || !email || !message || !consent) {
      return NextResponse.json(
        {
          error: "Veuillez remplir tous les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    /*
     * Validation de l'adresse e-mail
     */
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "L'adresse e-mail est invalide.",
        },
        { status: 400 }
      );
    }

    /*
     * Validation des longueurs
     */
    if (
      prenom.length > MAX_NAME_LENGTH ||
      nom.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      telephone.length > MAX_PHONE_LENGTH ||
      entreprise.length > MAX_COMPANY_LENGTH ||
      secteur.length > MAX_SECTOR_LENGTH ||
      solution.length > MAX_SOLUTION_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        {
          error: "Certaines données dépassent la longueur autorisée.",
        },
        { status: 400 }
      );
    }

    /*
     * Rate limiting
     *
     * Maximum :
     * 5 requêtes valides
     * par période glissante de 10 minutes
     * pour une même adresse IP.
     */
    const ip = getClientIp(request);

    const rateLimitResult = await ratelimit.limit(ip);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error:
            "Trop de demandes ont été envoyées. Veuillez réessayer dans quelques minutes.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.reset),
          },
        }
      );
    }

    /*
     * Enregistrement MySQL
     */
    const [result] = await pool.execute<mysql.ResultSetHeader>(
      `INSERT INTO hopla_leads
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
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())`,
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

    return NextResponse.json(
      {
        success: true,
        id: result.insertId,
      },
      {
        status: 201,
        headers: {
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          "X-RateLimit-Reset": String(rateLimitResult.reset),
        },
      }
    );
  } catch (error) {
    console.error(
      "Erreur API contact:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}