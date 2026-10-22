"use client";
import { useState } from "react";
import { primer } from "@content/pages/primer";
import { goal } from "@/lib/analytics";
import { goals } from "@/config/goals";

// Демо кабинета (решение 16.10, цель demo_open — 22.10): файл public/demo/kabinet.html из чата «Фундамент» грузится только по кнопке — 1,4 МБ не тянем на каждого посетителя.
export default function DemoFrame() {
	const t = primer.demo;
	const [on, setOn] = useState(false);
	return (
		<div className="pm-demo">
			<div className="pm-demo-bar"><i></i><i></i><i></i><span>{t.title}</span><a href="/demo/kabinet.html" target="_blank" rel="noopener" onClick={() => goal(goals.demoOpen)}>{t.full}</a></div>
			{on ? (
				<iframe src="/demo/kabinet.html" title={t.title} loading="lazy"></iframe>
			) : (
				<div className="pm-demo-start">
					<p>{t.screens}</p>
					<button type="button" className="btn p" onClick={() => { setOn(true); goal(goals.demoOpen); }}>{t.open}</button>
				</div>
			)}
		</div>
	);
}
