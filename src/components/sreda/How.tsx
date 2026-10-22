import SectionHead from "@/components/ui/SectionHead";
import { sreda } from "@content/pages/sreda";

// 03 Как проходит: четыре шага часа и условия.
export default function How() {
	const w = sreda.how;
	return (
		<section id="how" className="alt svc v2">
			<div className="wrap">
				<SectionHead num={w.num} label={w.label} title={w.h2} lead={w.lead} />
				<ol className="sr-flow">{w.steps.map((t, i) => <li key={t.b} className={t.tag ? "end" : undefined}><span className="n">{i + 1}</span><b>{t.b}</b><p>{t.t}</p>{t.tag && <em>{t.tag}</em>}</li>)}</ol>
				<ul className="sr-terms">{w.terms.map((t) => <li key={t}>{t}</li>)}</ul>
			</div>
		</section>
	);
}
