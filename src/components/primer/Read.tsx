import SectionHead from "@/components/ui/SectionHead";
import { primer } from "@content/pages/primer";

// 03 Как читать карту.
export default function Read() {
	const r = primer.read;
	return (
		<section id="read" className="alt">
			<div className="wrap">
				<SectionHead num={r.num} label={r.label} title={r.h2} lead={r.lead} />
				<ul className="pm-points">{r.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
			</div>
		</section>
	);
}
