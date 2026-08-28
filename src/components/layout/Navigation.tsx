"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

// Шапка сайта: лого, навигация (с выпадающим «Книги»), переключатель языка, CTA.
export default function Navigation() {
  const { t } = useLang();
  const [booksOpen, setBooksOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const prog = document.getElementById("prog");

    const onScroll = () => {
      if (!nav || !prog) return;
      nav.classList.toggle("sc", window.scrollY > 40);
      const height = document.body.scrollHeight - window.innerHeight;
      const value = height > 0 ? Math.min((window.scrollY / height) * 100, 100) : 0;
      prog.style.width = `${value}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="prog" />
      <nav id="nav">
        <div className="ni">
          <a href="/" className="logo">
            NcAi
          </a>
          <ul className="nl">
            <li>
              <a href="/consulting">{t("nav.consulting")}</a>
            </li>
            <li>
              <a href="/ai-training">{t("nav.aiTraining")}</a>
            </li>
            <li
              className="nl-has-drop"
              onMouseEnter={() => setBooksOpen(true)}
              onMouseLeave={() => setBooksOpen(false)}
            >
              <button type="button" className="nl-drop-btn" onClick={() => setBooksOpen((v) => !v)}>
                {t("nav.books")} <span className="nl-caret">▾</span>
              </button>
              {booksOpen && (
                <ul className="nl-drop">
                  <li>
                    <a href="/book" className="nl-drop-link">
                      <span className="nl-drop-t">{t("nav.bookNeuro")}</span>
                      <span className="nl-drop-d">Нейробиология продаж · 6 глав</span>
                    </a>
                  </li>
                  <li>
                    <a href="/agency-in-a-box" className="nl-drop-link">
                      <span className="nl-drop-t">{t("nav.bookAgency")}</span>
                      <span className="nl-drop-d">Методология NCAi · 6 глав</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/blog">{t("nav.blog")}</a>
            </li>
            <li>
              <a href="/o-proekte">{t("nav.about")}</a>
            </li>
            <li>
              <a href="/portfolio">{t("nav.portfolio")}</a>
            </li>
          </ul>
          <div className="nl-right">
            <LangSwitch />
            <a href="/consulting#offer" className="nc">
              {t("nav.cta")}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
