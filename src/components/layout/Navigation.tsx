"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";

// Шапка сайта: лого, навигация (с выпадающим «Книги»), переключатель языка, CTA.
// На мобильном (≤640px) десктоп-меню скрывается, вместо него — бургер ☰,
// открывающий выезжающую шторку со всеми пунктами (крупные тапы, свайп/крестик).
const MENU_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "Главная" },
  { href: "/consulting", label: "Внедрение NCAi" },
  { href: "/ai-training", label: "Обучение AI" },
  { href: "/book", label: "Книги" },
  { href: "/blog", label: "Блог" },
  { href: "/prompts", label: "Промпты" },
  { href: "/team-book", label: "Команда" },
  { href: "/o-proekte", label: "О проекте" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/partners", label: "Партнёры" },
];

export default function Navigation() {
  const { t } = useLang();
  const [booksOpen, setBooksOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Блокируем прокрутку фона, пока открыта шторка
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div id="prog" />
      <nav id="nav">
        <div className="ni">
          <a href="/" className="logo">
            NCAi
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
                </ul>
              )}
            </li>
            <li>
              <a href="/blog">{t("nav.blog")}</a>
            </li>
            <li>
              <a href="/prompts">Промпты</a>
            </li>
            <li>
              <a href="/team-book">Команда</a>
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
            <button
              type="button"
              className="burger"
              aria-label="Открыть меню"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильная шторка-меню */}
      <div className={`mnav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mnav-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mnav-panel">
          <div className="mnav-head">
            <span className="mnav-logo">NCAi</span>
            <button
              type="button"
              className="mnav-close"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <nav className="mnav-links">
            {MENU_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span className="mnav-arrow">→</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mnav-foot">
            <a href="mailto:ilya.novitskii@yandex.ru" className="mnav-cta">
              Написать напрямую
            </a>
            <div className="mnav-soc">
              <a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href="mailto:ilya.novitskii@yandex.ru">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
