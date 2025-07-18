import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

// Debug: Log the config to verify it's loaded
console.log("🔧 Next.js config loaded with remotePatterns:", nextConfig.images?.remotePatterns);

export default nextConfig;