import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";

// 04 · что можно поручить: группы по участку пути клиента и что не входит.
export default function Scope() {
	const c = process.scope;
	return (
		<section id="scope" className="scope">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="sgroups">
					{c.groups.map((g) => <div key={g.title}><p className="lbl">{g.title}</p><ul>{g.items.map((t) => <li key={t}>{t}</li>)}</ul></div>)}
				</div>
				<div className="notdo"><p className="lbl">{c.notLabel}</p><ul>{c.not.map((t) => <li key={t}>{t}</li>)}</ul></div>
			</div>
		</section>
	);
}
