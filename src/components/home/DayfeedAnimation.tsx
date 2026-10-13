"use client";
import { useEffect } from "react";
import { home } from "@content/pages/home";

// Лента «от задачи до продаж»: шаги плавно проходят «в работе → готово», последняя строка — результат,
// держится дольше, потом лента мягко начинается заново. Без анимации, если она отключена в системе.
const STEP = 2200; // мс на шаг
const HOLD = 6000; // сколько держим результат

export default function DayfeedAnimation() {
	useEffect(() => {
		const list = document.querySelector<HTMLUListElement>(".df-list");
		const items = Array.from(document.querySelectorAll<HTMLLIElement>(".df-list li"));
		if (!list || !items.length) return;
		const f = home.hero.feed;
		const set = (li: HTMLLIElement, s: "" | "is-run" | "is-done") => {
			li.classList.remove("is-run", "is-done");
			if (s) li.classList.add(s);
			const st = li.querySelector(".df-st");
			const result = li.classList.contains("df-result");
			if (st) st.textContent = s === "is-done" ? (result ? f.resultDone : f.done) : s === "is-run" ? f.run : "";
		};
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			items.forEach((li) => set(li, "is-done"));
			return;
		}
		let k = 0;
		const timers: number[] = [];
		const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
		const tick = () => {
			if (k > 0) set(items[k - 1], "is-done");
			if (k < items.length) {
				set(items[k], "is-run");
				k++;
				later(tick, k === items.length ? STEP / 2 : STEP);
			} else {
				later(() => {
					list.classList.add("df-fade");
					later(() => { items.forEach((li) => set(li, "")); list.classList.remove("df-fade"); k = 0; later(tick, 700); }, 600);
				}, HOLD);
			}
		};
		items.forEach((li) => set(li, ""));
		later(tick, 600);
		return () => timers.forEach(clearTimeout);
	}, []);
	return null;
}
