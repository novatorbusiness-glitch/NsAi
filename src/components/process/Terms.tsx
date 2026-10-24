import Rich from "@/components/ui/Rich";
import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";

// 03 · условия работы в команде: цена, срок, одна компания за раз и что не входит. id «vedenie» — старые ссылки на ведение.
export default function Terms() {
	const c = process.terms;
	return (
		<section id="vedenie">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="terms">
					<div className="tprice">
						<p className="wp-big">{c.price} <small>{c.unit}</small></p>
						<ul>{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
						<a className="btn p" href="#contact" data-goal="cta_start_team">{process.hero.primary}</a>
					</div>
					<div className="tnot">
						<p className="lbl">{c.notLabel}</p>
						<ul>{c.not.map((t) => <li key={t}>{t}</li>)}</ul>
						<p className="cap"><Rich t={c.offer} /></p>
					</div>
				</div>
			</div>
		</section>
	);
}
