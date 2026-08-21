// src/app/api/admin/db-egress/route.ts

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
  connectionLimit: 2,
  queueLimit: 0,

  ssl: {
    rejectUnauthorized: false,
  },
});

interface EgressRow extends mysql.RowDataPacket {
  ip_sortante: string;
}

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

    const [rows] = await pool.query<EgressRow[]>(
  `SELECT
      REPLACE(
        REPLACE(
          LEFT(HOST, LENGTH(HOST) - LOCATE(':', REVERSE(HOST))),
          '[',
          ''
        ),
        ']',
        ''
      ) AS ip_sortante
   FROM information_schema.PROCESSLIST
   WHERE ID = CONNECTION_ID()`
);

    const ipSortante = rows[0]?.ip_sortante;

    if (!ipSortante) {
      return NextResponse.json(
        {
          error: "Impossible d'identifier l'adresse IP sortante.",
        },
        {
          status: 500,
          headers: {
            "Cache-Control": "no-store, private",
          },
        }
      );
    }

    return NextResponse.json(
      {
        ip_sortante: ipSortante,
      },
      {
        headers: {
          "Cache-Control": "no-store, private",
        },
      }
    );
  } catch (error) {
    console.error(
      "Erreur diagnostic IP MySQL:",
      error instanceof Error
        ? error.message
        : "Erreur inconnue"
    );

    return NextResponse.json(
      {
        error: "Impossible d'effectuer le diagnostic MySQL.",
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