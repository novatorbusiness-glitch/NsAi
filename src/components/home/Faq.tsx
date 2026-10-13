import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";
import { faq } from "@content/pages/faq";
import SectionHead from "@/components/ui/SectionHead";

// 09 · вопросы (вопрос собственника «а если…?»): короткий ответ жирным, тексты — content/pages/faq.ts.
export default function Faq() {
	return (
		<section id="faq">
			<div className="wrap">
				<SectionHead num={home.faq.num} label={home.faq.label} title={home.faq.h2} lead={home.faq.lead} />
				<div className="faq faq-grid">
					{faq.map((f) => <details key={f.q}><summary>{f.q}</summary><div className="a"><Rich t={f.a} /></div></details>)}
				</div>
			</div>
		</section>
	);
}
