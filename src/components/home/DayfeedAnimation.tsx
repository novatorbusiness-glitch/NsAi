"use client";
import { useEffect } from "react";
import { home } from "@content/pages/home";

// Лента «что сделано за два дня»: строки по очереди проходят «в работе → готово». Без анимации, если она отключена в системе.
export default function DayfeedAnimation() {
	useEffect(() => {
		const items = Array.from(document.querySelectorAll<HTMLLIElement>(".df-list li"));
		if (!items.length) return;
		const set = (li: HTMLLIElement, s: string) => {
			li.className = li.className.replace(/\s?(is-run|is-done)/g, "") + (s ? " " + s : "");
			const st = li.querySelector(".df-st");
			if (st) st.textContent = s === "is-done" ? home.hero.feed.done : home.hero.feed.run;
		};
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			items.forEach((li) => set(li, "is-done"));
			return;
		}
		let k = 0;
		const timers: number[] = [];
		const tick = () => {
			if (k < items.length) {
				if (k > 0) set(items[k - 1], "is-done");
				set(items[k], "is-run");
				k++;
				timers.push(window.setTimeout(tick, 1500));
			} else {
				set(items[items.length - 1], "is-done");
				timers.push(window.setTimeout(() => { items.forEach((li) => set(li, "")); k = 0; timers.push(window.setTimeout(tick, 600)); }, 3500));
			}
		};
		items.forEach((li) => set(li, ""));
		timers.push(window.setTimeout(tick, 500));
		return () => timers.forEach(clearTimeout);
	}, []);
	return null;
}
