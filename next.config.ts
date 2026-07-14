import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Stock placeholder photos - swap these for your own /public images later.
      { protocol: "https", hostname: "images.unsplash.com" },
      // YouTube video thumbnails.
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
