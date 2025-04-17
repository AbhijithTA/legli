import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Ensure this is set
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true, // Important for static export
  },

};

export default nextConfig;
