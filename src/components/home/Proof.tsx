import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · цифры из работы: шесть крупных карточек — что среда уже разобрала и собрала на проектах Ильи (решение 23.10).
export default function Proof() {
	const c = home.proof;
	return (
		<section id="proof" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="proof">
					{c.cards.map((k) => (
						<div className="pf" key={k.unit}>
							<p className="pf-n"><b>{k.num}</b><span>{k.unit}</span></p>
							<p className="pf-t">{k.text}</p>
							<p className="pf-d">{k.dep}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
