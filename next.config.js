/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    // Try disabling worker usage
    workerThreads: false,
    optimizePackageImports: false,
  },
  compiler: {
    // Use SWC instead of Babel for faster builds
    target: 'es2020',
  },
}
