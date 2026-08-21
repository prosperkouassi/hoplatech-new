// src/app/api/admin/auth/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import {
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_DURATION,
  createAdminSessionToken,
  isValidAdminPassword,
  isValidAdminSession,
} from "@/lib/admin-session";

export const runtime = "nodejs";

const requiredEnvVariables = [
  "ADMIN_PASSWORD",
  "ADMIN_SESSION_SECRET",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
] as const;

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    throw new Error(`Variable d'environnement manquante : ${variable}`);
  }
}

const redis = Redis.fromEnv();

const loginRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"),
  prefix: "alteractweb:admin-auth",
});

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

/**
 * Connexion admin
 */
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    const rateLimitResult = await loginRateLimit.limit(ip);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error:
            "Trop de tentatives de connexion. Veuillez réessayer dans quelques minutes.",
        },
        {
          status: 429,
          headers: {
            "Cache-Control": "no-store, private",
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.reset),
          },
        }
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Requête invalide." },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store, private",
          },
        }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Données invalides." },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store, private",
          },
        }
      );
    }

    const password =
      typeof (body as Record<string, unknown>).password === "string"
        ? ((body as Record<string, unknown>).password as string)
        : "";

    if (!password) {
      return NextResponse.json(
        { error: "Mot de passe requis." },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store, private",
          },
        }
      );
    }

    if (!isValidAdminPassword(password)) {
      return NextResponse.json(
        { error: "Identifiants incorrects." },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store, private",
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.reset),
          },
        }
      );
    }

    const token = createAdminSessionToken();

    const response = NextResponse.json(
      {
        success: true,
      },
      {
        headers: {
          "Cache-Control": "no-store, private",
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          "X-RateLimit-Reset": String(rateLimitResult.reset),
        },
      }
    );

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: ADMIN_SESSION_DURATION,
    });

    return response;
  } catch (error) {
    console.error(
      "Erreur authentification admin:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, private",
        },
      }
    );
  }
}

/**
 * Vérification de la session
 */
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (!token || !isValidAdminSession(token)) {
      return NextResponse.json(
        {
          authenticated: false,
        },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store, private",
          },
        }
      );
    }

    return NextResponse.json(
      {
        authenticated: true,
      },
      {
        headers: {
          "Cache-Control": "no-store, private",
        },
      }
    );
  } catch (error) {
    console.error(
      "Erreur vérification session admin:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );

    return NextResponse.json(
      {
        authenticated: false,
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

/**
 * Déconnexion
 */
export async function DELETE() {
  const response = NextResponse.json(
    {
      success: true,
    },
    {
      headers: {
        "Cache-Control": "no-store, private",
      },
    }
  );

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return response;
}