import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Pas d'optimisation d'images Cloudflare configurée : les visuels sont
    // servis tels quels depuis les assets statiques du Worker.
    unoptimized: true,
  },
};

export default nextConfig;
