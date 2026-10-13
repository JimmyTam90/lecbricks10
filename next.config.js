// Hub–Spoke Proxy: Hub (https://primegearlab.com/letbricks) rewrites to this Spoke project.
//
// ROOT CAUSE OF THE "UNSTYLED PAGE" BUG: assetPrefix was hardcoded to https://letbricks10.vercel.app,
// but the Vercel project is named "lecbricks10" (no "t"), so every /_next/static CSS/JS request went
// to a host that does not serve this project (404). The prefix is now derived, never hardcoded.
//
// assetPrefix resolution (production builds only):
//   1. SPOKE_PROJECT_URL (explicit, set in Vercel -> Settings -> Environment Variables, BUILD time)
//   2. https://$VERCEL_PROJECT_PRODUCTION_URL (Vercel injects the real production hostname at build)
//   3. none -> relative /_next/static (always correct for direct Spoke access)
// A malformed/placeholder value is ignored instead of breaking every asset.
function resolveSpokeOrigin() {
  const raw =
    process.env.SPOKE_PROJECT_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");
  if (!raw) return undefined;
  try {
    const u = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    return u.origin; // strips any path/trailing slash; never include the Hub subpath
  } catch {
    return undefined;
  }
}
const spokeOrigin = process.env.NODE_ENV === "production" ? resolveSpokeOrigin() : undefined;
if (process.env.NODE_ENV === "production") {
  console.log(`[next.config] assetPrefix = ${spokeOrigin ?? "(relative)"}`);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  // NO basePath: the Hub owns the public /letbricks subpath. Setting basePath here would double-prefix.
  assetPrefix: spokeOrigin,
  poweredByHeader: false,
  images: { unoptimized: true },
  async rewrites() {
    // Spoke answers /letbricks/* too, so /letbricks/logo.png works on direct access as well as via the Hub.
    return [{ source: "/letbricks/:path*", destination: "/:path*" }];
  },
  async headers() {
    // Cross-origin loading of Spoke assets from the Hub origin.
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};
export default nextConfig;
