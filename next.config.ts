import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    // output: "export",   
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true, 
  },
};

export default nextConfig;
