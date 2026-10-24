"use client";
import { useEffect, useRef, useState } from "react";
import { primer } from "@content/pages/primer";
import { goal } from "@/lib/analytics";
import { goals } from "@/config/goals";

// Демо кабинета (решение 16.10, цель demo_open — 22.10): файл public/demo/kabinet.html из чата «Фундамент» грузится только по кнопке — 1,4 МБ не тянем на каждого посетителя.
// На компьютере демо рисуется в веб-версии (ширина 1280) и уменьшается под блок (решение Ильи 24.10), на телефоне — мобильная версия как есть.
const WEB = 1280;
const H = 800;

export default function DemoFrame() {
	const t = primer.demo;
	const [on, setOn] = useState(false);
	const [k, setK] = useState(1);
	const box = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = box.current;
		if (!el) return;
		const fit = () => setK(el.clientWidth >= 700 ? el.clientWidth / WEB : 1);
		fit();
		const ro = new ResizeObserver(fit);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);
	const web = k !== 1;
	return (
		<div className="pm-demo" ref={box}>
			<div className="pm-demo-bar"><i></i><i></i><i></i><span>{t.title}</span><a href="/demo/kabinet.html" target="_blank" rel="noopener" onClick={() => goal(goals.demoOpen)}>{t.full}</a></div>
			{on ? (
				web ? (
					<div className="pm-demo-web" style={{ height: H * k }}>
						<iframe src="/demo/kabinet.html" title={t.title} style={{ width: WEB, height: H, transform: `scale(${k})` }}></iframe>
					</div>
				) : (
					<iframe src="/demo/kabinet.html" title={t.title} loading="lazy"></iframe>
				)
			) : (
				<div className="pm-demo-start">
					<p>{t.screens}</p>
					<button type="button" className="btn p" onClick={() => { setOn(true); goal(goals.demoOpen); }}>{t.open}</button>
				</div>
			)}
		</div>
	);
}
