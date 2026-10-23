import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 04 · связка с услугами: тот же опыт и та же среда в вашей команде — две ссылки.
export default function Bridge() {
	const c = keisy.bridge;
	return (
		<section className="band">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="kbridge">{c.links.map((x) => <a key={x.href} href={x.href}><b>{x.t} →</b><span>{x.d}</span></a>)}</div>
			</div>
		</section>
	);
}
