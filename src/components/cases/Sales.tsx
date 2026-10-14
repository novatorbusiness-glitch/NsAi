import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 01 · системы продаж (опыт агентства до 2025): по каждому проекту задача, главное решение, что дало, кто за что отвечал.
export default function Sales() {
	const c = keisy.sales;
	const l = c.labels;
	return (
		<section id="sales" className="dark">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<p className="nda">{c.nda}</p>
				<div className="srows">
					{c.cards.map((k) => (
						<article className="srow" key={k.area}>
							<div className="sr-l">
								<p className="sr-a">{k.area}</p>
								<h3>{k.title}</h3>
								<p className="sr-n"><b>{k.num}</b> {k.outcome}</p>
							</div>
							<dl className="sr-r">
								<dt>{l.task}</dt><dd>{k.task}</dd>
								<dt>{l.decision}</dt><dd>{k.decision}</dd>
								<dt>{l.role}</dt><dd>{k.role}</dd>
							</dl>
						</article>
					))}
				</div>
				<p className="closing">{c.closing}</p>
			</div>
		</section>
	);
}
