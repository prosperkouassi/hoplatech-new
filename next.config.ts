// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 active Turbopack par défaut en dev.
  // Cette config vide évite le conflit avec la config webpack déjà présente.
  turbopack: {},

  // ✅ Force Webpack en production (utile si tu veux garder cette config)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configuration client si nécessaire
    }
    return config;
  },
};

export default nextConfig;