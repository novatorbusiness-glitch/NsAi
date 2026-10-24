import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 03 · как работаем вместе: три шага и плашка с ценой работы в команде.
export default function Work() {
	const c = home.work;
	return (
		<section id="work">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="work">
					<ol className="wsteps">{c.steps.map((s, i) => <li key={s.title}><span>{i + 1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>)}</ol>
					<div className="wprice">
						<p className="wp-big">{c.price} <small>{c.unit}</small></p>
						<p className="wp-t">{c.terms}</p>
						<p className="wp-one">{c.one}</p>
						<a className="btn p" href="#contact" data-goal="cta_start_team">{home.hero.primary}</a>
					</div>
				</div>
			</div>
		</section>
	);
}
