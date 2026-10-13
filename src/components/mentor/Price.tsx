import { site } from "@/config/site";
import { mentor } from "@content/pages/nastavnichestvo";

// Н.5 · сколько стоит (цена — config/prices.ts).
export default function Price() {
	const c = mentor.price;
	return (
		<section id="price" className="band dark">
			<div className="wrap split">
				<div className="head">
					<h2>{c.h2}</h2>
					<p className="price-big">{c.price}<small>{c.per}</small></p>
				</div>
				<div>
					<p className="lead" style={{ marginTop: "0" }}>{c.lead}</p>
					{c.subs.map((s) => <p className="sub" key={s}>{s}</p>)}
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{c.button}</a>
				</div>
			</div>
		</section>
	);
}
