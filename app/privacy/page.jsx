import LegalPage from "../../components/LegalPage.jsx";
import { publicUrl } from "../../lib/site-config.js";

export const metadata = {
  title: "Privacy Policy | PrimeGearLab",
  alternates: { canonical: publicUrl("/privacy") },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
        <p>This site is operated by PrimeGearLab, an independent affiliate publisher. Contact: <a className="underline" href="mailto:daniaengracia26377@gmail.com">daniaengracia26377@gmail.com</a>.</p>
        <h2 className="text-xl font-bold text-white">What we collect</h2>
        <p>We do not run accounts or forms. If analytics or advertising tags are enabled (Google Analytics 4, Google Ads, Meta Pixel), they may collect technical data such as page views, device and browser information and clicks on affiliate links, and they may set cookies. Those providers handle that data under their own policies.</p>
        <h2 className="text-xl font-bold text-white">Affiliate links</h2>
        <p>Links to Letbricks carry a referral parameter so the merchant can attribute visits to us. After you click, the merchant&apos;s own privacy policy applies.</p>
        <h2 className="text-xl font-bold text-white">Your choices</h2>
        <p>You can block cookies in your browser or use your platform&apos;s ad-privacy controls. To ask a question or request information about data we hold, email us at the address above.</p>
    </LegalPage>
  );
}
