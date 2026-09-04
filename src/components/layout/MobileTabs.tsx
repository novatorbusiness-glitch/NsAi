"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Мобильная нижняя навигация — быстрые действия (табы).
// Основная навигация на мобильном — бургер в шапке (Navigation.tsx / inline-шапки),
// здесь только самое частое: Главная / Книги / Блог / Промпты / Ещё.
// Видна только на экранах ≤640px; на десктопе остаётся верхнее меню.
// Дизайн-система NCAi: тёмная подложка + жёлтый акцент, mono-лейблы.
export default function MobileTabs() {
  const pathname = usePathname() ?? "/";
  const [moreOpen, setMoreOpen] = useState(false);

  // Закрываем шторку «Ещё» при смене маршрута
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  const isActive = (prefixes: string[]) =>
    prefixes.some((p) => pathname === p || pathname.startsWith(p + "/") || pathname.startsWith(p));

  const tabs = [
    { label: "Главная", icon: "🏠", href: "/", active: pathname === "/" },
    { label: "Книги", icon: "📖", href: "/book", active: isActive(["/book"]) },
    { label: "Блог", icon: "✍️", href: "/blog", active: isActive(["/blog"]) },
    { label: "Ещё", icon: "☰", href: null, active: isActive(["/consulting", "/ai-training", "/o-proekte", "/portfolio", "/partners"]) },
  ];

  const moreLinks = [
    { label: "Внедрение NCAi", href: "/consulting" },
    { label: "Обучение AI", href: "/ai-training" },
    { label: "О проекте", href: "/o-proekte" },
    { label: "Портфолио", href: "/portfolio" },
    { label: "Партнёры", href: "/partners" },
    { label: "Политика", href: "/privacy" },
    { label: "Оферта", href: "/offer" },
  ];

  return (
    <>
      <div className="ntabs-spacer" aria-hidden="true" />
      <nav className="ntabs" aria-label="Быстрые действия">
        {tabs.map((tab) =>
          tab.href ? (
            <a key={tab.label} href={tab.href} className={`ntab${tab.active ? " on" : ""}`}>
              <span className="ntab-icon">{tab.icon}</span>
              <span className="ntab-label">{tab.label}</span>
            </a>
          ) : (
            <button
              key={tab.label}
              type="button"
              className={`ntab${tab.active ? " on" : ""}`}
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
            >
              <span className="ntab-icon">{tab.icon}</span>
              <span className="ntab-label">{tab.label}</span>
            </button>
          )
        )}

        {moreOpen && (
          <div className="ntabs-more">
            {moreLinks.map((l) => (
              <a key={l.href} href={l.href} className={`ntabs-more-link${pathname === l.href ? " on" : ""}`}>
                {l.label}
                <span className="ntabs-more-go">→</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
