"use client";
import { useEffect, useRef } from "react";
import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { goals } from "@/config/goals";
import SectionHead from "@/components/ui/SectionHead";

// Лёгкий шаг: экспресс-разбор в боте за 190 ₽ (решение Ильи 26.10). Справа объёмная сцена: телефон с ботом, стопка PDF и жетоны;
// сцена въезжает из глубины при прокрутке и наклоняется за курсором (26.10: «усилить 3D»).
export default function Express() {
	const c = home.express;
	const m = c.mock;
	const scene = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = scene.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		el.classList.add("wait");
		const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("on"); io.disconnect(); } }, { threshold: 0.3 });
		io.observe(el);
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return () => io.disconnect();
		let raf = 0;
		const move = (e: PointerEvent) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - 0.5;
			const y = (e.clientY - r.top) / r.height - 0.5;
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => { el.style.setProperty("--tx", (x * 16).toFixed(2)); el.style.setProperty("--ty", (y * -12).toFixed(2)); });
		};
		const leave = () => { el.style.setProperty("--tx", "0"); el.style.setProperty("--ty", "0"); };
		el.addEventListener("pointermove", move);
		el.addEventListener("pointerleave", leave);
		return () => { io.disconnect(); cancelAnimationFrame(raf); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
	}, []);
	return (
		<section id="express" className="alt">
			<div className="wrap xp-grid">
				<div>
					<SectionHead label={c.label} title={c.h2} lead={c.lead} />
					<ul className="xp-list">{c.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
					<div className="cta-row"><a className="btn p" href={site.contacts.expressBot} target="_blank" rel="noopener" data-goal={goals.express}>{c.button}</a></div>
					<p className="cap xp-note">{c.note}</p>
				</div>
				<div className="xp-scene" ref={scene} aria-hidden="true">
					<div className="xp-floor"></div>
					<div className="xp-stage">
						<div className="xp-phone">
							<div className="xp-bar"><i></i><b>Экспресс-разбор</b><small>бот</small></div>
							{m.chat.map((x, i) => <p key={i} className={x.me ? "xp-msg me" : "xp-msg"}>{x.t}</p>)}
						</div>
						<div className="xp-pdf">
							<i className="xp-sheet s1"></i><i className="xp-sheet s2"></i>
							<span className="xp-tag">{m.tag}</span>
							<p className="xp-brand">Илья Новицкий</p>
							<p className="xp-h">{m.pdfTitle}</p>
							<p className="xp-s">{m.pdfSub}</p>
							{m.blocks.map((b) => <div key={b.h} className={"main" in b ? "xp-b main" : "xp-b"}><b>{b.h}</b><span>{b.t}</span></div>)}
							<i className="xp-glare"></i>
						</div>
						{m.chips.map((x, i) => <span key={x} className={"xp-chip c" + (i + 1)}>{x}</span>)}
					</div>
				</div>
			</div>
		</section>
	);
}
