import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Perfect for fast loading and static exports
  },
};

export default nextConfig;
