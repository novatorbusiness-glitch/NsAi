import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";

// 01 · что могу усилить: четыре участка, какой нужен — решаем на разборе.
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
			</div>
		</section>
	);
}
