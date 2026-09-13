import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML at build time. The whole point: organic search is the main
  // acquisition channel, and a client-rendered SPA both ranks worse and paints
  // slower on a 4G Android.
  output: "export",

  // Static export has no image optimisation server.
  images: { unoptimized: true },

  // Emit /about/index.html rather than /about.html so any static host serves it.
  trailingSlash: true,
};

export default nextConfig;
