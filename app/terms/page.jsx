import LegalPage from "../../components/LegalPage.jsx";
import { publicUrl } from "../../lib/site-config.js";

export const metadata = {
  title: "Terms of Use | PrimeGearLab",
  alternates: { canonical: publicUrl("/terms") },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use">
        <p>This page is general information about products sold by a third-party merchant, Letbricks. It is not professional advice.</p>
        <p>We do not sell products. Prices, availability, shipping, returns and warranties are set by the merchant and may change without notice. Review the merchant&apos;s terms before you buy.</p>
        <p>We try to keep content accurate but make no guarantee that it is complete or current. Product names and images belong to their respective owners. LEGO is a trademark of the LEGO Group, which does not sponsor, authorize or endorse this site.</p>
    </LegalPage>
  );
}
