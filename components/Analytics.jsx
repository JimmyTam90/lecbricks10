import Script from "next/script";
import { TRACKING } from "../lib/site-config.js";

// Loads only integrations that have an ID configured. Status without IDs: NOT_CONFIGURED.
export default function Analytics() {
  const { ga4, ads, meta } = TRACKING;
  const gtagId = ga4 || ads;
  return (
    <>
      {gtagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            ${ga4 ? `gtag('config', '${ga4}');` : ""}
            ${ads ? `gtag('config', '${ads}');` : ""}
          `}</Script>
        </>
      )}
      {meta && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${meta}');fbq('track','PageView');
        `}</Script>
      )}
    </>
  );
}
