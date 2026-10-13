import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";
import { faq } from "@content/pages/faq";

// 9 · вопросы (content/pages/faq.ts).
export default function Faq() {
	return (
		<section id="faq" className="alt">
			<div className="wrap">
				<div className="section-head"><h2>{home.faq.h2}</h2></div>
				<div className="faq faq-grid">
					{faq.map((f) => <details key={f.q}><summary>{f.q}</summary><div className="a"><Rich t={f.a} /></div></details>)}
				</div>
			</div>
		</section>
	);
}
