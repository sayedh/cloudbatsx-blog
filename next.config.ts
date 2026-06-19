import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images as-is (no on-the-fly optimization). Matches cloudbats.com and
  // keeps the path open to a static export later. Source images should be
  // pre-sized / pre-compressed (see AUTHORING.md).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
