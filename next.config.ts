import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
