import LegalPage from "../../components/LegalPage.jsx";
import { publicUrl } from "../../lib/site-config.js";

export const metadata = {
  title: "Affiliate Disclosure | PrimeGearLab",
  alternates: { canonical: publicUrl("/affiliate-disclosure") },
};

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
        <p>As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.</p>
        <p>PrimeGearLab is independent. We are not the Letbricks store, and we do not claim to be an official or authorized seller. Buttons that open Letbricks do so in a new tab and include our referral parameter.</p>
        <p>A click does not guarantee a sale or commission, and the commission does not change the price you pay.</p>
    </LegalPage>
  );
}
