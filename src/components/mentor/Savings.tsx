import Rich from "@/components/ui/Rich";
import { mentor } from "@content/pages/nastavnichestvo";

// Сколько это экономит: студия, почасовка, наставничество.
export default function Savings() {
	const c = mentor.savings;
	return (
		<section className="alt compare">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2><p className="lead">{c.lead}</p></div>
				<div className="grid g3 cmp">
					{c.cards.map((k) => <div className={"me" in k ? "card me" : "card"} key={k.label}><p className="lbl">{k.label}</p><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<p className="cap"><Rich t={c.cap} /></p>
			</div>
		</section>
	);
}
