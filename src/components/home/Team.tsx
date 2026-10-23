import { home } from "@content/pages/home";
import { site } from "@/config/site";
import SectionHead from "@/components/ui/SectionHead";

const plural = (n: number, [one, few, many]: string[]) => (n % 10 === 1 && n % 100 !== 11 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many);

// 01 · моя среда: как я управляю агентами + 9 отделов карточками. Раскрытие — задачи, агенты, что решаю я, пример из моей работы.
export default function Team() {
	const c = home.team;
	const l = c.labels;
	return (
		<section id="team" className="team">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<p className="team-note">{c.note}</p>
				<div className="tflow" aria-label={c.flowLabel}>
					<p className="lbl">{c.flowLabel}</p>
					<ol>{c.flow.map((s, i) => <li key={s}><span>{i + 1}</span>{s}</li>)}</ol>
				</div>
				<div className="deps">
					{c.deps.map((d, i) => (
						<details key={d.name} className="dep">
							<summary>
								<span className="dep-n">{String(i + 1).padStart(2, "0")}</span>
								<span className="dep-h"><b>{d.name}</b><span>{d.line}</span><small>{d.agents.length} {plural(d.agents.length, ["агент", "агента", "агентов"])} · {d.skills} {plural(d.skills, ["навык", "навыка", "навыков"])}</small></span>
							</summary>
							<div className="dep-in">
								<p className="lbl">{l.tasks}</p>
								<ul className="dep-tasks">{d.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
								<p className="lbl">{l.agents}</p>
								<ul className="dep-agents">{d.agents.map((a) => <li key={a.n}><b>{a.n}</b><span>{a.t}</span></li>)}</ul>
								<p className="lbl">{l.me}</p>
								<p className="dep-me">{d.me}</p>
								{d.mine && <div className="dep-mine"><p className="lbl">{l.mine}</p><p>{d.mine}</p><small>{l.mineNote}</small></div>}
								<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start" data-variant={`dep-${i + 1}`}>{l.cta} →</a>
							</div>
						</details>
					))}
				</div>
				<p className="team-own">{c.own}</p>
			</div>
		</section>
	);
}
