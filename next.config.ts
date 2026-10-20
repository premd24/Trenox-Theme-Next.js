import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a second build/dev server run beside `next dev` without sharing .next
  // (e.g. NEXT_DIST_DIR=.next-verify npx next dev -p 3200).
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
