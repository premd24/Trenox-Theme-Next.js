import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a second build/dev server run beside `next dev` without sharing .next
  // (e.g. NEXT_DIST_DIR=.next-verify npx next dev -p 3200).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: {
    // The default tsc CLI checker also checks .next/dev/types, whose Pages Router
    // validator clashes with .next/types ("Duplicate identifier 'PagesPageConfig'")
    // whenever `next dev` has run. The compiler-API checker filters dev types out.
    useTypeScriptCli: false,
  },
};

export default nextConfig;
