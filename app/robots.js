import { publicUrl } from "../lib/site-config.js";
export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: publicUrl("/sitemap.xml") };
}
