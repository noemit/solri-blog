/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    // Disable worker usage
    return config;
  },
};
