/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "google-cdn.digitop.vn" },
      { protocol: "https", hostname: "saigonconcert.com" },
    ],
  },
};

export default nextConfig;
