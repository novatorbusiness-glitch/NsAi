import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";

// 02 Что внутри чертежа: семь частей по структуре «Фундамента», каждая раскрывается: что внутри и что это даёт.
export default function Parts() {
	const c = primer.parts;
	return (
		<section id="parts">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="pm-parts">
					{c.items.map((x, i) => (
						<details key={x.b}>
							<summary><span>{i + 1}</span><b>{x.b}</b><i aria-hidden="true">+</i></summary>
							<dl><dt>{c.inside}</dt><dd>{x.t}</dd><dt>{c.gives}</dt><dd>{x.g}</dd></dl>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
