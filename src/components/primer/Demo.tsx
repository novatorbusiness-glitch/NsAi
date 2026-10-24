import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";
import DemoFrame from "@/components/primer/DemoFrame";

// 04 Макет: демо кабинета, на компьютере веб-версия.
export default function Demo() {
	const d = primer.demo;
	return (
		<section id="demo">
			<div className="wrap">
				<SectionHead num={d.num} label={d.label} title={d.h2} lead={d.lead} />
				<DemoFrame />
				<p className="under">{d.cap}</p>
			</div>
		</section>
	);
}
