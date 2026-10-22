import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";
import MapCanvas from "@/components/primer/MapCanvas";

// 02 Карта проекта в стиле Miro.
export default function ProjectMap() {
	const m = primer.map;
	return (
		<section id="map">
			<div className="wrap">
				<SectionHead num={m.num} label={m.label} title={m.h2} lead={m.lead} />
				<MapCanvas />
				<p className="under">{m.honest}</p>
			</div>
		</section>
	);
}
