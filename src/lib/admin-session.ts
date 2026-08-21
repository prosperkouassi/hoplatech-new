import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "alteract_admin_session";
export const ADMIN_SESSION_DURATION = 60 * 60 * 8; // 8 heures

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "Variable d'environnement manquante : ADMIN_SESSION_SECRET"
    );
  }

  return secret;
}

function safeCompare(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

export function createAdminSessionToken(): string {
  const secret = getSessionSecret();

  const expiresAt =
    Math.floor(Date.now() / 1000) + ADMIN_SESSION_DURATION;

  const payload = String(expiresAt);

  const signature = createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return `${payload}.${signature}`;
}

export function isValidAdminSession(token: string): boolean {
  const secret = getSessionSecret();

  const parts = token.split(".");

  if (parts.length !== 2) {
    return false;
  }

  const [expiresAtRaw, receivedSignature] = parts;

  const expiresAt = Number(expiresAtRaw);

  if (!Number.isFinite(expiresAt)) {
    return false;
  }

  const now = Math.floor(Date.now() / 1000);

  if (expiresAt <= now) {
    return false;
  }

  const expectedSignature = createHmac("sha256", secret)
    .update(expiresAtRaw)
    .digest("hex");

  return safeCompare(
    receivedSignature,
    expectedSignature
  );
}

export function isValidAdminPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error(
      "Variable d'environnement manquante : ADMIN_PASSWORD"
    );
  }

  return safeCompare(password, adminPassword);
}