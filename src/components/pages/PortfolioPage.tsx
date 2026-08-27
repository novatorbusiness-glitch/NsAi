"use client";

import { useEffect } from "react";
import { css, body, js } from "@/lib/pages/portfolio-content";

/**
 * Страница /portfolio — «Tech Product Partner»: найм и партнёрство.
 * CSS/разметка в дизайн-системе NCAi (токены 1:1 с index-content.ts),
 * интерактив (кастомный курсор, nav scroll, reveal) — в useEffect.
 */
export default function PortfolioPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { __ncaiPortfolioInited?: boolean };
    if (w.__ncaiPortfolioInited) return;
    w.__ncaiPortfolioInited = true;
    try {
      // Статичный, доверенный скрипт из исходного HTML
      new Function(js)();
    } catch (err) {
      console.error("NCAi portfolio page script error:", err);
    }
  }, [js]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
