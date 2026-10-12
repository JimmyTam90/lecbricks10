export const SITE = {
  projectName: "letbricks",
  brandName: "PrimeGearLab",
  baseUrl: "https://primegearlab.com",
  publicSubpath: "/letbricks",
  spokeUrl: "https://letbricks10.vercel.app",
  contactEmail: "daniaengracia26377@gmail.com",
  merchantName: "Letbricks",
  merchantUrl: "https://www.letbricks.com",
  headerLogoPath: "/letbricks/logo.png",
  title: "Letbricks MOC Building Block Sets: Castles, Trains, Military & More | PrimeGearLab",
  description:
    "Browse MOC (My Own Creation) building block sets from Letbricks: medieval castles, modular buildings, Technic vehicles, trains and military builds. Independent affiliate guide.",
};

export const publicUrl = (path = "") =>
  `${SITE.baseUrl}${SITE.publicSubpath}${path === "/" ? "" : path}`;

/** Public, subpath-aware internal path (plain <a>, never next/link, so the Hub subpath is kept). */
export const publicPath = (path = "") => `${SITE.publicSubpath}${path === "/" ? "" : path}`;

export const TRACKING = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "",
  ads: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  meta: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
