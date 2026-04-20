import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable Turbopack to use webpack bundler
    webpack: false,
  },
};

export default nextConfig;
