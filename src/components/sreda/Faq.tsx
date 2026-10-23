import Rich from "@/components/ui/Rich";
import { sreda } from "@content/pages/sreda";
import SectionHead from "@/components/ui/SectionHead";

// 06 · вопросы: короткий ответ жирным, в том числе «кому не подойдёт» и границы по ограничениям сервисов.
export default function Faq() {
	const c = sreda.faq;
	return (
		<section id="faq">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="faq faq-lines">{c.items.map((f) => <details key={f.q}><summary>{f.q}</summary><div className="a"><Rich t={f.a} /></div></details>)}</div>
			</div>
		</section>
	);
}
