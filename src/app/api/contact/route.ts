// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export const runtime = 'nodejs';

const dbConfig = {
  host: process.env.DB_HOST || 'srv1795.hstgr.io',
  user: process.env.DB_USER || 'u486119168_hopla_app1',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'u486119168_hopla_app',
  port: Number(process.env.DB_PORT || 3306),
  ssl: {
    rejectUnauthorized: false,
  },
};

export async function POST(request: NextRequest) {
  let connection: Awaited<ReturnType<typeof mysql.createConnection>> | null = null;

  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, entreprise, secteur, solution, message, consent } = body;

    if (!prenom || !nom || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    connection = await mysql.createConnection(dbConfig);

    const [result] = (await connection.execute(
      `INSERT INTO hopla_leads 
        (first_name, last_name, email, phone, company_name, sector, solution_slug, message, consent_at, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())`,
      [prenom, nom, email, telephone || null, entreprise || null, secteur || null, solution || null, message]
    )) as [mysql.ResultSetHeader, unknown];

    return NextResponse.json({ success: true, id: result.insertId }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    console.error('Erreur insertion lead:', message);

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV !== 'production'
            ? `Erreur DB: ${message}`
            : 'Erreur lors de l\'envoi. Veuillez réessayer.',
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}