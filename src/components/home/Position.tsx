"use client";
import { useEffect, useRef } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 05 · моя позиция (07.11): три правила, цены позиции, честная граница.
// Контент виден без JS: класс pre (скрытие) ставит только живой JS, seen возвращает видимость с анимацией.
const icons: Record<string, React.ReactNode> = {
	"01": <g><circle cx="12" cy="13" r="7" /><path d="M12 9v4l2.5 2.5M12 3v2M4.5 7 6 8.5M19.5 7 18 8.5" /></g>,
	"02": <g><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 4v2M12 18v2M4 12h2M18 12h2" /></g>,
	"03": <g><path d="M12 3l2.5 5.5L20 9.5l-4 4 1 5.5-5-2.5-5 2.5 1-5.5-4-4 5.5-1L12 3z" /></g>,
};

export default function Position() {
	const c = home.position;
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el || !("IntersectionObserver" in window)) return;
		const io = new IntersectionObserver(
			(es) => {
				if (es.some((e) => e.isIntersecting)) { el.classList.add("seen"); el.classList.remove("pre"); io.disconnect(); }
			},
			{ threshold: 0.2 }
		);
		el.classList.add("pre");
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return (
		<section id="position" className="pos">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="pos-grid" ref={ref}>
					{c.items.map((r, i) => (
						<article className="pos-card" key={r.n} style={{ transitionDelay: `${i * 0.12}s` }}>
							<span className="pos-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icons[r.n]}</svg></span>
							<h3>{r.b[0]}<br />{r.b[1]}</h3>
							<p>{r.t}</p>
						</article>
					))}
				</div>
				<p className="pos-line"><b>{c.line.split(":")[0]}:</b>{c.line.split(":").slice(1).join(":")}</p>
			</div>
		</section>
	);
}
