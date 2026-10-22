import SectionHead from "@/components/ui/SectionHead";
import { primer } from "@content/pages/primer";

// 06 Ваш проект в три шага.
export default function You() {
	const y = primer.you;
	return (
		<section id="you">
			<div className="wrap">
				<SectionHead num={y.num} label={y.label} title={y.h2} lead={y.lead} />
				<ul className="pm-points">{y.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
			</div>
		</section>
	);
}
