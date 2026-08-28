"use client";

import { useLang } from "@/lib/i18n";

// Переключатель языка RU/EN для шапки и подвала.
export default function LangSwitch({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <span className={`lang-switch${light ? " lang-switch--light" : ""}`} role="group" aria-label="Language switch">
      <button
        type="button"
        className={`lang-btn${lang === "ru" ? " is-active" : ""}`}
        onClick={() => setLang("ru")}
        aria-pressed={lang === "ru"}
      >
        RU
      </button>
      <span className="lang-sep">/</span>
      <button
        type="button"
        className={`lang-btn${lang === "en" ? " is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </span>
  );
}
