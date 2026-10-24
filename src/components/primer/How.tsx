import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";

// 05 Как проходит: четыре шага без кухни (что делаю, а не как).
export default function How() {
	const c = primer.how;
	return (
		<section id="how" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="rz-steps">{c.steps.map((s, i) => <li key={s.b}><span>{i + 1}</span><b>{s.b}</b><p>{s.t}</p></li>)}</ol>
			</div>
		</section>
	);
}
