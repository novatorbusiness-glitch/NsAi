import SectionHead from "@/components/ui/SectionHead";
import { sreda } from "@content/pages/sreda";

// 04 Если нужно больше: по шагам и под ключ, без цен.
export default function More() {
	const m = sreda.more;
	return (
		<section id="more">
			<div className="wrap">
				<SectionHead num={m.num} label={m.label} title={m.h2} lead={m.lead} />
				<ul className="sr-more">{m.items.map((x) => <li key={x.b}><b>{x.b}</b><p>{x.t}</p></li>)}</ul>
				<p className="sr-more-note"><b>{m.price}</b> {m.note}</p>
			</div>
		</section>
	);
}
