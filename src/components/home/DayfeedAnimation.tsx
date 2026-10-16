"use client";
import { useEffect } from "react";
import { home } from "@content/pages/home";

// Консоль проекта на первом экране (16.10): этапы по очереди «в работе → готово», счётчик и полоса прогресса растут,
// итог проявляется последним и держится дольше, потом всё мягко начинается заново. Без анимации, если она отключена в системе
// (тогда в разметке сразу всё «готово» — так же видят поисковики и превью).
const STEP = 2000; // мс на этап
const HOLD = 6000; // сколько держим итог

export default function DayfeedAnimation() {
	useEffect(() => {
		const box = document.querySelector<HTMLDivElement>(".dayfeed.pc");
		const items = Array.from(document.querySelectorAll<HTMLLIElement>(".pc-list li"));
		if (!box || !items.length || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
		const f = home.hero.feed;
		const n = box.querySelector<HTMLElement>(".pc-n");
		const bar = box.querySelector<HTMLElement>(".pc-prog i");
		const set = (li: HTMLLIElement, s: "" | "is-run" | "is-done") => {
			li.classList.remove("is-run", "is-done");
			if (s) li.classList.add(s);
			const st = li.querySelector(".df-st");
			if (st) st.textContent = s === "is-done" ? f.done : s === "is-run" ? f.run : "";
		};
		const progress = (done: number) => {
			if (n) n.textContent = String(done);
			if (bar) bar.style.width = `${(done / items.length) * 100}%`;
		};
		let k = 0;
		const timers: number[] = [];
		const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
		const reset = () => { items.forEach((li) => set(li, "")); box.classList.remove("pc-final"); progress(0); k = 0; };
		const tick = () => {
			if (k > 0) set(items[k - 1], "is-done");
			progress(k);
			if (k < items.length) {
				set(items[k], "is-run");
				k++;
				later(tick, STEP);
			} else {
				box.classList.add("pc-final");
				later(() => { box.classList.add("pc-fade"); later(() => { reset(); box.classList.remove("pc-fade"); later(tick, 600); }, 600); }, HOLD);
			}
		};
		reset();
		later(tick, 500);
		return () => timers.forEach(clearTimeout);
	}, []);
	return null;
}
