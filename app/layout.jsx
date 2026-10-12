import "./globals.css";
import Analytics from "../components/Analytics.jsx";
import { SITE, publicUrl } from "../lib/site-config.js";

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: publicUrl("/") },
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: publicUrl("/"),
    siteName: SITE.brandName,
    locale: "en_US",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#1A202C" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
