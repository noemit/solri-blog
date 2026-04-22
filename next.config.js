/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    // Fixes the jest-worker error
    diagnosticOption: "preserve" 
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config, { isServer }) => {
    config.cache = false;
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // Handle worker issues
      'node:buffer': require.resolve('buffer'),
      'node:util': require.resolve('util'), 
      'node:stream': require.resolve('stream'),
      'node:crypto': require.resolve('crypto'),
    };
    return config;
  },
};
