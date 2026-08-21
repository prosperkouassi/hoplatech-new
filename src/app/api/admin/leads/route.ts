// src/app/api/admin/leads/route.ts

import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

import {
  ADMIN_COOKIE_NAME,
  isValidAdminSession,
} from "@/lib/admin-session";

export const runtime = "nodejs";

const requiredEnvVariables = [
  "DB_HOST",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "ADMIN_SESSION_SECRET",
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

export async function GET(request: NextRequest) {
  try {
    const sessionCookie =
      request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (
      !sessionCookie ||
      !isValidAdminSession(sessionCookie)
    ) {
      return NextResponse.json(
        {
          error: "Authentification requise.",
        },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store, private",
          },
        }
      );
    }

    const [rows] = await pool.execute(
      `SELECT
        id,
        first_name,
        last_name,
        email,
        phone,
        company_name,
        sector,
        solution_slug,
        message,
        consent_at,
        created_at
       FROM hopla_leads
       ORDER BY created_at DESC
       LIMIT 100`
    );

    return NextResponse.json(
      {
        leads: rows,
      },
      {
        headers: {
          "Cache-Control": "no-store, private",
        },
      }
    );
  } catch (error) {
    console.error(
      "Erreur chargement leads:",
      error instanceof Error
        ? error.message
        : "Erreur inconnue"
    );

    return NextResponse.json(
      {
        error: "Impossible de charger les leads.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, private",
        },
      }
    );
  }
}