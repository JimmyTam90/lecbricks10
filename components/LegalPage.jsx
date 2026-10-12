import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { publicPath } from "../lib/site-config.js";

export default function LegalPage({ title, children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-10 leading-relaxed text-slate-200">
        <a href={publicPath("/")} className="text-sm text-slate-400 underline">Back to home</a>
        <h1 className="font-display text-3xl font-bold text-white">{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
