import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// С кем работаю: три ниши (решение Ильи 29.10, «Ниши — исследование рынка — 29.10.md»): IT-продукты, частные клиники, франшизы.
export default function Niches() {
	const c = home.niches;
	return (
		<section id="niches" className="alt">
			<div className="wrap">
				<SectionHead label={c.label} title={c.h2} lead={c.lead} />
				<ul className="niches">{c.items.map((x) => <li key={x.b}><h3>{x.b}</h3><p>{x.t}</p></li>)}</ul>
			</div>
		</section>
	);
}
