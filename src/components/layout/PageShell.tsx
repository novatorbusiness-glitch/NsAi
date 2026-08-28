import Navigation from "./Navigation";
import Footer from "./Footer";

// Общий каркас страницы: фиксированная шапка + контент + подвал.
// Страницы верхнего уровня (blog, o-proekte, privacy, offer, partners…) оборачивают
// своё содержимое в этот компонент — получают консистентное меню/подвал и язык.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="shell-main">{children}</main>
      <Footer />
    </>
  );
}
