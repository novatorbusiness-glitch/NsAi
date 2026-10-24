import SectionHead from "@/components/ui/SectionHead";
import Rich from "@/components/ui/Rich";
import { primer } from "@content/pages/primer";

// 01 Зачем план: боль и рынок.
export default function Why() {
	const w = primer.why;
	return (
		<section id="why" className="alt">
			<div className="wrap">
				<SectionHead num={w.num} label={w.label} title={w.h2} lead={w.lead} />
				<ul className="pm-why">{w.items.map((x) => <li key={x.num}><b>{x.num}</b><span>{x.t}</span></li>)}</ul>
				<p className="ssrc"><Rich t={w.sources} /></p>
			</div>
		</section>
	);
}
