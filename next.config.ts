import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/air-conditioning",
        destination: "/services/hvac-system-repair",
        permanent: true,
      },
      {
        source: "/services/air-conditioning/",
        destination: "/services/hvac-system-repair",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srbequipment.ca",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "staging2.srbequipment.ca",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "staging4.srbequipment.ca",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
