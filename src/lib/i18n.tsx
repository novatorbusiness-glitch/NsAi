"use client";

// ─────────────────────────────────────────────────────────────────────────────
// NcAi · Лёгкий i18n-фреймворк (RU/EN) для статического экспорта.
// Контекст + хук useLang() + словарь. Язык хранится в localStorage,
// применяется к <html lang> и переживает перезагрузку страницы.
// ─────────────────────────────────────────────────────────────────────────────
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";

export type Lang = "ru" | "en";

export const LANG_STORAGE_KEY = "ncai-lang";

// Словарь. Ключи — короткие id, значения — { ru, en }.
export const dict = {
  // ── Навигация ──
  "nav.home": { ru: "Главная", en: "Home" },
  "nav.consulting": { ru: "Внедрение", en: "Consulting" },
  "nav.aiTraining": { ru: "Обучение AI", en: "AI Training" },
  "nav.books": { ru: "Книги", en: "Books" },
  "nav.bookNeuro": { ru: "Нейро-Воронка", en: "Neuro-Funnel" },
  "nav.bookAgency": { ru: "Агентство в коробке", en: "Agency in a Box" },
  "nav.blog": { ru: "Блог", en: "Blog" },
  "nav.about": { ru: "О проекте", en: "About" },
  "nav.portfolio": { ru: "Портфолио", en: "Portfolio" },
  "nav.cta": { ru: "Обсудить проект", en: "Discuss a project" },

  // ── Подвал ──
  "footer.tagline": {
    ru: "Архитектор систем. Нейромаркетинг, AI-автоматизация и системное мышление для тех, кто строит бизнес серьёзно.",
    en: "Systems architect. Neuromarketing, AI automation and systems thinking for those who build a serious business.",
  },
  "footer.colProject": { ru: "Проект", en: "Project" },
  "footer.colBooks": { ru: "Книги", en: "Books" },
  "footer.colWork": { ru: "Работа", en: "Work" },
  "footer.colLegal": { ru: "Правовое", en: "Legal" },
  "footer.contact": { ru: "Контакт", en: "Contact" },
  "footer.consulting": { ru: "Консалтинг", en: "Consulting" },
  "footer.cases": { ru: "Кейсы", en: "Cases" },
  "footer.method": { ru: "Метод", en: "Method" },
  "footer.freeBook": { ru: "Книга бесплатно", en: "Free book" },
  "footer.blog": { ru: "Блог · статьи", en: "Blog · articles" },
  "footer.about": { ru: "О проекте", en: "About the project" },
  "footer.aiTraining": { ru: "Обучение AI · 1 на 1", en: "AI Training · 1 on 1" },
  "footer.agency": { ru: "Агентство в коробке", en: "Agency in a Box" },
  "footer.privacy": { ru: "Политика конфиденциальности", en: "Privacy policy" },
  "footer.offer": { ru: "Публичная оферта", en: "Public offer" },
  "footer.rights": { ru: "Все права защищены.", en: "All rights reserved." },
  "footer.easter": { ru: "Сделано через лайф-кодинг —", en: "Made via live-coding —" },
  "footer.easter2": { ru: "как обещано", en: "as promised" },
  "footer.readBook": { ru: "Читать", en: "Read" },

  // ── Книги ──
  "book.neuroTitle": { ru: "Нейро-Воронка", en: "Neuro-Funnel" },
  "book.neuroSub": {
    ru: "Практическое руководство по инженерии систем продаж на стыке нейробиологии, поведенческой психологии и AI.",
    en: "A practical guide to engineering sales systems at the intersection of neurobiology, behavioural psychology and AI.",
  },
  "book.neuroBadge": { ru: "6 глав · 30 подглав · бесплатно", en: "6 chapters · 30 sections · free" },
  "book.agencyTitle": { ru: "Агентство в коробке", en: "Agency in a Box" },
  "book.agencySub": {
    ru: "Методология SaaS-платформы NCAi: мульти-аренда, распаковка клиента, подписка и тарифы, автоматизация.",
    en: "The NCAi SaaS platform methodology: multi-tenancy, client unpacking, subscription & pricing, automation.",
  },
  "book.agencyBadge": { ru: "Методология NCAi · 6 глав", en: "NCAi methodology · 6 chapters" },
  "book.read": { ru: "Читать →", en: "Read →" },
  "book.catalog": { ru: "Книги", en: "Books" },
  "book.catalogSub": {
    ru: "Книги Ильи Новицкого — читаются прямо на сайте, бесплатно.",
    en: "Books by Ilya Novitsky — read them right on the site, for free.",
  },

  // ── Общее ──
  "misc.backHome": { ru: "← На главную", en: "← Home" },
  "misc.ogTitle": { ru: "Илья Новицкий · NCAi", en: "Ilya Novitsky · NCAi" },
} as const;

export type DictKey = keyof typeof dict;

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: DictKey) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "ru",
  setLang: () => {},
  t: (key) => dict[key]?.ru ?? key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = typeof window !== "undefined" ? window.localStorage.getItem(LANG_STORAGE_KEY) : null;
    } catch {
      /* noop */
    }
    const next: Lang = saved === "en" ? "en" : "ru";
    setLangState(next);
    document.documentElement.lang = next === "en" ? "en" : "ru";
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* noop */
    }
    document.documentElement.lang = next === "en" ? "en" : "ru";
  }, []);

  const t = useCallback(
    (key: DictKey) => (dict[key] ? dict[key][lang] : key),
    [lang],
  );

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
