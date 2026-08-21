"use client";

import { useEffect } from "react";
import { css, body, js } from "@/lib/pages/consulting-content";

/**
 * Страница консалтинга: «Архитектор систем», оффер «Купите мои мозги на 2–3 месяца».
 * CSS/разметка взяты 1:1 из doc_9bc2c3b323f1_consulting.html,
 * интерактив (курсор, counters, timeline, reveal, particles) — в useEffect.
 */
export default function ConsultingPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { __ncaiConsultingInited?: boolean };
    if (w.__ncaiConsultingInited) return;
    w.__ncaiConsultingInited = true;
    try {
      // Статичный, доверенный скрипт из исходного HTML
      new Function(js)();
    } catch (err) {
      console.error("NCAi consulting page script error:", err);
    }
  }, [js]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
