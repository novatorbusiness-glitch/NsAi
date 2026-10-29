import { sreda } from "@content/pages/sreda";
import SectionHead from "@/components/ui/SectionHead";

// 01 · как устроена команда: путь задачи в четыре шага и два примера-цепочки (контент, личный бренд), как в шаге 5 PDF.
export default function Team() {
	const c = sreda.team;
	return (
		<section id="team" className="dark">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="tflow" aria-label={c.flowLabel}>
					<p className="lbl">{c.flowLabel}</p>
					<ol>{c.flow.map((s, i) => <li key={s.b}><span>{i + 1}</span><div><b>{s.b}</b><small>{s.t}</small></div></li>)}</ol>
				</div>
				<div className="chains">
					{c.examples.map((e) => (
						<details key={e.b} className="chain" open>
							<summary><b>{e.b}</b><span>{c.rolesLabel}: {e.roles.join(" · ")}</span></summary>
							<ol>
								{e.steps.map((s) => <li key={s.q}><p className="ch-q">«{s.q}»</p><p className="ch-a"><b>{s.who}</b> {s.t}</p></li>)}
							</ol>
						</details>
					))}
				</div>
				<p className="team-own">{c.note}</p>
			</div>
		</section>
	);
}
