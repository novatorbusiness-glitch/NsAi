import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · что это даёт: четыре выгоды (подрядчики, найм, время, ошибки).
export default function Save() {
	const c = home.save;
	return (
		<section id="save" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="save">{c.cards.map((k) => <div className="card" key={k.title}><h3>{k.title}</h3><p>{k.text}</p></div>)}</div>
			</div>
		</section>
	);
}
