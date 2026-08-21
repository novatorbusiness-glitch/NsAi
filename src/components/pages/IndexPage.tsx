"use client";

import { useEffect } from "react";
import { css, body, js } from "@/lib/pages/index-content";

/**
 * Новая главная: «Илья Новицкий — AI-Powered Product Builder».
 * Развилка трёх продуктов (консалтинг / обучение AI / книга) + портфолио.
 * CSS/разметка взяты 1:1 из doc_f92845db3127_index.html,
 * интерактив (курсор, particles, reveal, nav scroll) выполняется в useEffect.
 */
export default function IndexPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { __ncaiIndexInited?: boolean };
    if (w.__ncaiIndexInited) return;
    w.__ncaiIndexInited = true;
    try {
      // Статичный, доверенный скрипт из исходного HTML
      new Function(js)();
    } catch (err) {
      console.error("NCAi index page script error:", err);
    }
  }, [js]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
