import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";

// 2 · ситуации клиента.
export default function Situations() {
	const c = home.situations;
	return (
		<section id="situations" className="alt situations">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="grid g2">
					{c.cards.map((k) => <div className="card" key={k.title}><h3>{k.title}</h3><p><Rich t={k.text} /></p></div>)}
				</div>
				<p className="closing">{c.closing}</p>
			</div>
		</section>
	);
}
