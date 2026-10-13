import Rich from "@/components/ui/Rich";
import { mentor } from "@content/pages/nastavnichestvo";

// Н.2 · кому это подходит.
export default function Fit() {
	const c = mentor.fit;
	return (
		<section id="fit" className="alt situations">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="grid g3">
					{c.cards.map((k) => <div className="card" key={k.title}><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<p className="closing"><Rich t={c.closing} /></p>
			</div>
		</section>
	);
}
