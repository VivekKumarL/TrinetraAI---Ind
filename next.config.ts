import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remove deprecated `domains` and use `remotePatterns` instead
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**", // allow all user portrait images
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // allow any image from Pexels
      },
    ],
  },
};

export default nextConfig;
