import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Perfect for fast loading and static exports
  },
};

export default nextConfig;
