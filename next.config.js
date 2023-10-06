/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = {
  ...nextConfig,
  distDir: 'build', // Specify your custom output directory name here
  // Other Next.js configuration options...
};
