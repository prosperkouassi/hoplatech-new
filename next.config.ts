// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Désactiver Turbopack en production via l'option expérimentale valide
  experimental: {
    turbo: false,
  },
};

export default nextConfig;