"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";
import { ROADMAP } from "@/lib/roadmap";

export default function RoadmapPage() {
	const { lang } = useLang();
	const ru = lang === "ru";

	const done = ROADMAP.filter((s) => s.state === "done").length;
	const now = ROADMAP.filter((s) => s.state === "now").length;
	const plan = ROADMAP.filter((s) => s.state === "plan").length;

	return (
		<PageShell>
			<div className="w page-hero">
				<p className="page-badge">
					<span className="bdot" />
					{ru ? "Карта развития" : "Roadmap"}
				</p>
				<h1 className="page-h1">
					{ru ? "Откуда пришли и куда идём" : "Where we came from and where this is going"}
				</h1>
				<p className="page-sub">
					{ru
						? "Семь лет практики до платформы и месяц реальной разработки внутри неё. Даты старта ниже взяты из записей самой системы, а не написаны задним числом — где это так, стоит пометка."
						: "Seven years of practice before the platform and a month of real development inside it. The start dates below come from the system's own records rather than being written after the fact — where that's the case, it's marked."}
				</p>
			</div>

			<section className="alt" style={{ padding: "2.5rem 0" }}>
				<div className="w">
					<div className="hstats" style={{ animation: "none", opacity: 1, transform: "none" }}>
						<div className="hstat">
							<div className="hstatn">{done}</div>
							<div className="hstatl">{ru ? "Пройдено" : "Completed"}</div>
						</div>
						<div className="hstat">
							<div className="hstatn">{now}</div>
							<div className="hstatl">{ru ? "Идёт сейчас" : "In progress"}</div>
						</div>
						<div className="hstat">
							<div className="hstatn">{plan}</div>
							<div className="hstatl">{ru ? "В планах" : "Planned"}</div>
						</div>
						<div className="hstat">
							<div className="hstatn">2027</div>
							<div className="hstatl">{ru ? "Горизонт" : "Horizon"}</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="w">
					<ol className="vz-road">
						{ROADMAP.map((s, i) => (
							<li key={i} className={s.state === "done" ? "is-done" : s.state === "now" ? "is-now" : ""}>
								<div className="vz-road-when">{ru ? s.when : s.whenEn}</div>
								<div className="vz-road-what">{ru ? s.what : s.whatEn}</div>
								<div className="vz-road-x">{ru ? s.text : s.textEn}</div>
								{s.proof && <span className="vz-road-proof">{ru ? s.proof : s.proofEn}</span>}
							</li>
						))}
					</ol>

					<div className="vz-road-legend">
						<span>
							<i className="d" />
							{ru ? "сделано" : "done"}
						</span>
						<span>
							<i className="n" />
							{ru ? "идёт сейчас" : "in progress"}
						</span>
						<span>
							<i />
							{ru ? "план, а не обещание" : "planned, not promised"}
						</span>
					</div>

					<p className="vz-road-x" style={{ marginTop: "2rem", color: "var(--t3)" }}>
						{ru
							? "Сроки на будущие этапы не гарантирую: подтвердить их пока нечем. Как только появятся реальные цифры по живым клиентам, заменю планы на факты — с такой же пометкой об источнике."
							: "I don't guarantee dates for future stages — there's nothing to back them with yet. Once there are real numbers from live clients, I'll replace plans with facts, marked the same way."}
					</p>
				</div>
			</section>
		</PageShell>
	);
}
