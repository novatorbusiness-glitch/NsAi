import { sreda } from "@content/pages/sreda";
import SectionHead from "@/components/ui/SectionHead";

// 04 · какие задачи решает: четыре группы по четыре примера.
export default function Tasks() {
	const c = sreda.tasks;
	return (
		<section className="band">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="tgroups">{c.groups.map((g) => <div className="tg" key={g.b}><h3>{g.b}</h3><ul>{g.items.map((t) => <li key={t}>{t}</li>)}</ul></div>)}</div>
			</div>
		</section>
	);
}
