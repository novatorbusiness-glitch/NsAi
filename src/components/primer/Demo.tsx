import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";
import DemoFrame from "@/components/primer/DemoFrame";

// 04 Прототип: демо кабинета.
export default function Demo() {
	const d = primer.demo;
	return (
		<section id="demo">
			<div className="wrap">
				<SectionHead num={d.num} label={d.label} title={d.h2} lead={d.lead} />
				<p className="pm-note-l">{d.note}</p>
				<DemoFrame />
				<p className="under">{d.cap}</p>
			</div>
		</section>
	);
}
