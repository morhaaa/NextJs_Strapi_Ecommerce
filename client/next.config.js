/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "127.0.0.1",
      "res.cloudinary.com",
      "localhost",
      "images.pexels.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
