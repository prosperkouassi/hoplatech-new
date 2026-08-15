// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Force Webpack en production (contourne l'erreur PostCSS/Turbopack sur Hostinger)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configuration client si nécessaire
    }
    return config;
  },
  
  // Désactiver Turbopack uniquement en production via variable d'environnement
  // Cette approche est plus fiable que experimental.turbo sur Next.js 16.3+
};

export default nextConfig;