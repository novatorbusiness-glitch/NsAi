import Rich from "@/components/ui/Rich";
import { mentor } from "@content/pages/nastavnichestvo";

// Н.8 · вопросы.
export default function Faq() {
	const c = mentor.faq;
	return (
		<section id="faq">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="faq faq-grid">
					{c.items.map((f) => <details key={f.q}><summary>{f.q}</summary><div className="a"><Rich t={f.a} /></div></details>)}
				</div>
			</div>
		</section>
	);
}
