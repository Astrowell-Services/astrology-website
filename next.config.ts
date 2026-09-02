import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
