"use client";
import { useEffect, useRef } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 06 · как я вхожу в команду (07.11): ритм недели на живом таймлайне, 15 отраслей, цена крупно.
// Контент виден без JS: класс pre (скрытие) ставит только живой JS, seen возвращает видимость с анимацией.
export default function Work() {
	const c = home.work;
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el || !("IntersectionObserver" in window)) return;
		const io = new IntersectionObserver(
			(es) => {
				if (es.some((e) => e.isIntersecting)) { el.classList.add("seen"); el.classList.remove("pre"); io.disconnect(); }
			},
			{ threshold: 0.25 }
		);
		el.classList.add("pre");
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return (
		<section id="work" className="enter">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="enter-grid" ref={ref}>
					<div className="enter-panel">
						<div className="enter-cols">
							<div className="enter-txt">
								<p className="enter-note">{c.note}</p>
								<p className="enter-ind">{c.industries}</p>
							</div>
							<div className="enter-week" aria-label="Ритм рабочей недели">
								<div className="enter-line" aria-hidden="true" />
								{c.week.map((d, i) => (
									<article className={d.hi ? "enter-day hi" : "enter-day"} key={d.d} style={{ transitionDelay: `${0.5 + i * 0.65}s` }}>
										<span className="ed-dot" aria-hidden="true" />
										<div className="ed-b">
											<p className="ed-d"><b>{d.d}</b><span>{d.s}</span></p>
											<p className="ed-t">{d.t}</p>
										</div>
									</article>
								))}
							</div>
						</div>
						<div className="enter-foot">
							<p className="ep-big">{c.price} <small>{c.unit}</small></p>
							<p className="ep-terms">{c.terms}</p>
							<a className="btn p" href="#contact" data-goal="cta_start_team">Начать с плана на понедельник</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
