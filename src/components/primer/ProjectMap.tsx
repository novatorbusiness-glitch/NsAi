import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";
import MapCanvas from "@/components/primer/MapCanvas";

// 03 Пример целиком: карта своего AI-сервиса в стиле Miro, под ней как читать одной строкой.
export default function ProjectMap() {
	const m = primer.map;
	return (
		<section id="map" className="alt">
			<div className="wrap">
				<SectionHead num={m.num} label={m.label} title={m.h2} lead={m.lead} />
				<MapCanvas />
				<p className="pm-read">{m.read}</p>
				<p className="under">{m.honest}</p>
			</div>
		</section>
	);
}
