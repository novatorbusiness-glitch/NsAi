"use client";
import { useEffect } from "react";
import { goal } from "@/lib/analytics";
import { goals } from "@/config/goals";

// Один обработчик кликов на весь сайт: мессенджеры и ссылки с data-goal → цели Метрики.
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
		return () => document.removeEventListener("click", onClick);
	}, []);
	return null;
}
