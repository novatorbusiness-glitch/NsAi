import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { sreda } from "@content/pages/sreda";
import SectionHead from "@/components/ui/SectionHead";

// 05 · цены: консультация (собираете сами) и настройка под ключ; ниже — ссылка на работу в команде.
export default function Prices() {
	const c = sreda.prices;
	return (
		<section id="prices" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="sprices">
					{c.items.map((x) => (
						<div className={"main" in x ? "sp main" : "sp"} key={x.b}>
							<h3>{x.b}</h3>
							<p className="x-price"><b>{x.price}</b><span>{x.term}</span></p>
							<p>{x.t}</p>
							<a className={"main" in x ? "btn p" : "btn s"} href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_sreda" data-variant={"main" in x ? "consult" : "setup"}>{x.button}</a>
						</div>
					))}
				</div>
				<p className="team-own"><Rich t={c.team} /></p>
			</div>
		</section>
	);
}
