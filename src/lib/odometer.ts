/**
 * Счётчик метрик («живой индикатор» из концепта материального стимула, п.2).
 * Цифры в блоках статистики досчитывают до своего значения, когда попадают
 * в экран — как одометр. Оживляет реальные числа, ничего к ним не добавляя.
 *
 * Разбирает написание вида «300+», «50M ₽», «100K+», «7+»: анимируется только
 * числовая часть, префикс и суффикс остаются как есть.
 */

type Parsed = { prefix: string; value: number; suffix: string };

function parse(text: string): Parsed | null {
	const m = text.match(/^(\D*?)(\d[\d\s.,]*)(.*)$/);
	if (!m) return null;
	const value = parseFloat(m[2].replace(/\s/g, "").replace(",", "."));
	if (!isFinite(value)) return null;
	return { prefix: m[1], value, suffix: m[3] };
}

function format(value: number, target: number): string {
	// Дробные цели (например 6.5) показываем с одним знаком, целые — без
	return Number.isInteger(target) ? String(Math.round(value)) : value.toFixed(1);
}

export function initOdometer(selector: string): () => void {
	if (typeof window === "undefined") return () => {};

	const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
	if (!nodes.length) return () => {};

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	// Без IntersectionObserver и при reduced-motion оставляем числа как есть
	if (reduced || !("IntersectionObserver" in window)) return () => {};

	const run = (el: HTMLElement) => {
		const parsed = parse(el.textContent || "");
		if (!parsed) return;
		const { prefix, value, suffix } = parsed;
		const duration = 1100;
		const start = performance.now();

		const step = (now: number) => {
			const t = Math.min((now - start) / duration, 1);
			// easeOutCubic — быстрый старт, мягкая остановка, как у механического счётчика
			const eased = 1 - Math.pow(1 - t, 3);
			el.textContent = prefix + format(value * eased, value) + suffix;
			if (t < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	};

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (!e.isIntersecting) return;
				io.unobserve(e.target);
				run(e.target as HTMLElement);
			});
		},
		{ threshold: 0.6 },
	);

	nodes.forEach((n) => io.observe(n));
	return () => io.disconnect();
}
