/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Fixing Netlify build and using Image from CharkaUI ( next export )
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
