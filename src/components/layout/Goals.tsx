"use client";
import { useEffect } from "react";
import { goal } from "@/lib/analytics";
import { goals } from "@/config/goals";

// Один обработчик кликов на весь сайт: мессенджеры и ссылки с data-goal → цели Метрики.
// На главной — цель «дочитал до кейсов», когда блок «Что я уже сделал» появился на экране (один раз).
export default function Goals() {
	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			const a = (e.target as HTMLElement | null)?.closest?.("a");
			if (!a) return;
			const href = a.getAttribute("href") || "";
			const own = a.getAttribute("data-goal");
			if (own) goal(own, a.dataset.variant ? { variant: a.dataset.variant } : undefined);
			const mentor = location.pathname.startsWith("/nastavnichestvo");
			if (href.includes("t.me/Ilya_novator")) goal(mentor ? goals.mentorTelegram : goals.telegram);
			if (href.includes("max.ru/")) goal(mentor ? goals.mentorTelegram : goals.max);
		};
		document.addEventListener("click", onClick);
		let io: IntersectionObserver | undefined;
		const cases = location.pathname === "/" ? document.getElementById("done") : null;
		if (cases && "IntersectionObserver" in window) {
			io = new IntersectionObserver((es) => {
				if (es.some((x) => x.isIntersecting)) { goal(goals.readToCases); io?.disconnect(); }
			}, { threshold: 0.3 });
			io.observe(cases);
		}
		return () => { document.removeEventListener("click", onClick); io?.disconnect(); };
	}, []);
	return null;
}
