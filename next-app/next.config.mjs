/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },

    ],
  },
  allowedDevOrigins: ["127.0.0.1:3000"],
};

export default nextConfig;