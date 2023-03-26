/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "styles/variables.scss";`,
  },
  images: {
    domains: ['upload.wikimedia.org', 'cdn.builder.io'],
  },
};

module.exports = nextConfig;
