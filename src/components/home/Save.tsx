import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · что это даёт: тёмная полоса, четыре выгоды «было → стало» (подрядчики, найм, время, ошибки).
export default function Save() {
	const c = home.save;
	return (
		<section id="save" className="band">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="save">
					{c.cards.map((k) => (
						<div className="sv" key={k.title}>
							<p className="sv-ft"><s>{k.from}</s><span aria-hidden="true">→</span><b>{k.to}</b></p>
							<h3>{k.title}</h3>
							<p>{k.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
