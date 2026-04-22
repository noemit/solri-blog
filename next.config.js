/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    // Fix jest-worker error on Windows
    config.cache = false;
    if (!isServer && config.externals) {
      config.externals = config.externals.filter(
        (e) => !e.includes('jest-util')
      );
    }
    return config;
  },
};
