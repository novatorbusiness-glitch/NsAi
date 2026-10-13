import { mentor } from "@content/pages/nastavnichestvo";

// Н.4 · что входит и что понадобится от вас.
export default function Included() {
	const c = mentor.included;
	return (
		<section id="inside">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="grid g2 incl">
					{c.cards.map((k) => <div className="card ic-card" key={k.title}><span className="bdg">{k.badge}</span><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<div className="need"><p className="lbl">{c.needLabel}</p><p>{c.need}</p></div>
			</div>
		</section>
	);
}
