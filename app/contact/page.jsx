import LegalPage from "../../components/LegalPage.jsx";
import { publicUrl } from "../../lib/site-config.js";

export const metadata = {
  title: "Contact | PrimeGearLab",
  alternates: { canonical: publicUrl("/contact") },
};

export default function Page() {
  return (
    <LegalPage title="Contact">
        <p>Questions about this page or its content? Email <a className="underline" href="mailto:daniaengracia26377@gmail.com">daniaengracia26377@gmail.com</a>.</p>
        <p>For orders, shipping or returns, contact Letbricks directly through its website. We cannot access or change orders.</p>
    </LegalPage>
  );
}
