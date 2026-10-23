import { sreda } from "@content/pages/sreda";
import SectionHead from "@/components/ui/SectionHead";

// 04 · какие задачи решает: восемь коротких примеров.
export default function Tasks() {
	const c = sreda.tasks;
	return (
		<section className="band">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ul className="tasks">{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
			</div>
		</section>
	);
}
