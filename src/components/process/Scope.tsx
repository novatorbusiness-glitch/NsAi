import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";

// 04 · зона ответственности в ведении: четыре участка системы и что не входит.
export default function Scope() {
	const c = process.scope;
	return (
		<section id="scope" className="scope">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="zones">
					{c.groups.map((g, i) => (
						<li key={g.title}>
							<span className="zn">{String(i + 1).padStart(2, "0")}</span>
							<div className="zt"><h3>{g.title}</h3><p>{g.desc}</p></div>
							<ul>{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
						</li>
					))}
				</ol>
				<div className="notdo"><p className="lbl">{c.notLabel}</p><ul>{c.not.map((t) => <li key={t}>{t}</li>)}</ul></div>
			</div>
		</section>
	);
}
