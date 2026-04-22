/** @type {import('next').NextConfig} */
module.exports = {
  // Disable webpack to avoid Turbopack conflict on Windows
  experimental: {
    // Try to avoid worker issues
    webpack: (config) => config
  }
};
