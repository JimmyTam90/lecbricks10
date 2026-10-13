# letbricks: PrimeGearLab affiliate landing page (Next.js 14.2.35, JavaScript)

Hub–Spoke Proxy: public `https://primegearlab.com/letbricks` -> Spoke (Vercel project `lecbricks10`; verify host in Vercel Domains).

## Setup
1. Put your logo at `public/logo.png` (public URL: `/letbricks/logo.png`).
2. `cp .env.example .env.local`, then `npm install`, `npm run validate`, `npm run lint`, `npm run build`.
3. Vercel (Spoke project): `SPOKE_PROJECT_URL` is optional; if unset, the build uses `VERCEL_PROJECT_PRODUCTION_URL`. If you set it, use the REAL host (the project is named `lecbricks10`, so likely `https://lecbricks10.vercel.app`). Check the build log line `[next.config] assetPrefix = ...`. Optional: `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.

## Hub rewrite (assumed; compare with your real Hub `vercel.json`)
```json
{ "rewrites": [
  { "source": "/letbricks", "destination": "https://<your-spoke-host>.vercel.app" },
  { "source": "/letbricks/:path*", "destination": "https://<your-spoke-host>.vercel.app/:path*" }
] }
```
Config choices: no `basePath`; `assetPrefix` = Spoke origin (production only); `trailingSlash: false`;
Spoke-side rewrite `/letbricks/:path*` -> `/:path*` so direct Spoke access to `/letbricks/logo.png` also works;
CORS header on `/_next/static/*`; system fonts only (no next/font, avoids cross-origin font loading).
Internal links use plain `<a href="/letbricks/...">` (not next/link) so the Hub subpath is never lost.

## Affiliate links
All CTAs call `resolveAffiliateUrl(key)` in `lib/affiliate-links.js`; URLs are exact strings ending `?ref=kfjtocxz`.
The original `/collections/...` URLs returned 404, so they were remapped to real WooCommerce paths (see comments in that file).
`sci-fi-space` -> merchant "Movie" category; `military-weapons` -> "Military"; `architecture-modular` -> "Buildings".
All CTAs: `target="_blank" rel="noopener noreferrer"`, including mobile and the sticky bar.

## QA status (honest)
| Check | Status |
|---|---|
| `npm run validate` (mapping, ref preserved, ids, image URLs well-formed) | PASS (ran) |
| npm install / lint / build | NOT EXECUTED (no network in authoring sandbox) |
| Remapped merchant URLs click-tested | NOT EXECUTED |
| Image URLs load (IMAGE_RUNTIME_VERIFIED) | NOT EXECUTED |
| Hub–Spoke assets, logo, in-app browsers, responsive screenshots | NOT EXECUTED |
| Tracking | GA4 / Ads / Meta: NOT_CONFIGURED until IDs are set |
Affiliate attribution, commission eligibility and merchant availability are unverified.
