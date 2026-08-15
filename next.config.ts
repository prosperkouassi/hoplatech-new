// next.config.ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // ✅ Configuration minimale pour Turbopack en dev
  turbopack: {},
  
  // ✅ Résolution explicite des alias @/ pour Webpack en prod
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;