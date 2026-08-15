// src/app/api/admin/leads/route.ts
import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'srv1795.hstgr.io',
  user: process.env.DB_USER || 'u486119168_hopla_app1',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'u486119168_hopla_app',
};

export async function GET() {
  let connection;
  
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'SELECT * FROM hopla_leads ORDER BY created_at DESC LIMIT 100'
    );
    
    return NextResponse.json({ leads: rows });
  } catch (error) {
    console.error('Erreur chargement leads:', error);
    return NextResponse.json({ error: 'Impossible de charger les leads.' }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}