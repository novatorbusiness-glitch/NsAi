"use client";

import { useEffect } from "react";
import { css, body, js } from "@/lib/pages/ai-training-content";

/**
 * Страница «Обучение AI»: оффер 1 на 1, 1 месяц, 70–80к ₽.
 * CSS/разметка самодостаточны (как consulting-content), интерактив
 * (курсор, nav scroll, reveal, particles) — в useEffect.
 */
export default function AiTrainingPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { __ncaiTrainingInited?: boolean };
    if (w.__ncaiTrainingInited) return;
    w.__ncaiTrainingInited = true;
    try {
      // Статичный, доверенный скрипт страницы
      new Function(js)();
    } catch (err) {
      console.error("NCAi ai-training page script error:", err);
    }
  }, [js]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
