// Hub–Spoke Proxy: Hub (primegearlab.com/letbricks) rewrites to this Spoke.
// - NO basePath (the Hub owns the public subpath).
// - assetPrefix = absolute Spoke origin so /_next/static/* loads straight from the Spoke.
// - public/ files (logo.png) are NOT covered by assetPrefix; they are reached via the
//   Hub rewrite at /letbricks/logo.png (or via the Spoke-side rewrite below).
const SPOKE_ORIGIN = process.env.SPOKE_PROJECT_URL || "https://letbricks10.vercel.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  assetPrefix: process.env.NODE_ENV === "production" ? SPOKE_ORIGIN : undefined,
  poweredByHeader: false,
  images: { unoptimized: true }, // remote merchant images are rendered with plain <img>
  async rewrites() {
    // Lets the Spoke answer /letbricks/* directly too (same shape the Hub forwards).
    return [{ source: "/letbricks/:path*", destination: "/:path*" }];
  },
  async headers() {
    // Hub-origin pages load assets cross-origin from the Spoke.
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};
export default nextConfig;
