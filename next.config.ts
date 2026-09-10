import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  fallbacks: {
    document: "/",
  },
  workboxOptions: {
    disableDevLogs: true,
    skipWaiting: true,
    clientsClaim: true,
    additionalManifestEntries: [
      { url: "/bg-site.png", revision: "bg-site-1" },
      { url: "/icons/icon-192.png", revision: "icon-192-1" },
      { url: "/icons/icon-512.png", revision: "icon-512-1" },
      { url: "/manifest.webmanifest", revision: "manifest-1" },
    ],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // next-pwa injects a webpack config; production builds use --webpack.
  turbopack: {},
};

export default withPWA(nextConfig);
