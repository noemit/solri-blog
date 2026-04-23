/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    workerThreads: false,
    optimizeFonts: false, // Disable built-in NPM font optimization
  },
  // Disable Next.js font optimization - we'll use Google Fonts directly
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
