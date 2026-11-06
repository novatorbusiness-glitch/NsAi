"use client";
import { useEffect, useRef } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 05 · моя позиция (07.11): три правила, цены позиции, честная граница.
// Контент виден без JS: класс pre (скрытие) ставит только живой JS, seen возвращает видимость с анимацией.
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
							<span className="pos-n">{r.n}</span>
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
