import { razbor } from "@content/pages/razbor";
import SectionHead from "@/components/ui/SectionHead";

// 01 Как ищу потери: четыре шага и что проверено в примере. Без кухни: что делаю, а не как (решение Ильи 23.10).
export default function How() {
	const c = razbor.how;
	return (
		<section id="how">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="rz-steps">{c.steps.map((s, i) => <li key={s.b}><span>{i + 1}</span><b>{s.b}</b><p>{s.t}</p></li>)}</ol>
				<p className="lbl rz-plbl">{c.proofLabel}</p>
				<ul className="rz-proof">{c.proof.map((x) => <li key={x.num}><b>{x.num}</b><span>{x.text}</span></li>)}</ul>
			</div>
		</section>
	);
}
