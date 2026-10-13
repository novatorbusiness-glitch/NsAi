import { mentor } from "@content/pages/nastavnichestvo";

// Н.6 · чем отличается от курса и консультации.
export default function Difference() {
	const c = mentor.difference;
	return (
		<section id="vs">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="vs3">
					{c.items.map((k) => <div className={"on" in k ? "vc on" : "vc"} key={k.tag}><em>{k.tag}</em><p>{k.text}</p></div>)}
				</div>
			</div>
		</section>
	);
}
