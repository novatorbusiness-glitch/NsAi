import { razbor } from "@content/pages/razbor";
import { common } from "@content/pages/common";

// Первый экран: обещание аудита, три факта, справа итог примера — сумма потерь и три места полосами.
export default function Hero() {
	const h = razbor.hero;
	const c = h.card;
	const top = c.rows[0].n;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{h.crumb}</p>
					<div className="role"><span className="pill">{h.pill}</span></div>
					<h1 className="ph1">{h.h1}</h1>
					<p className="lead">{h.lead}</p>
					<div className="facts rz-facts">{h.facts.map((x) => <div key={x.text}><b>{x.num}</b><span>{x.text}</span></div>)}</div>
					<div className="cta-row">
						<a className="btn p" href="#contact" data-goal="cta_start">{h.primary}</a>
						<a className="btn s" href="#doc">{h.secondary}</a>
					</div>
				</div>
				<a className="rz-card" href="#doc" aria-label={c.label}>
					<span className="rz-tag">{c.tag}</span>
					<p className="lbl">{c.label}</p>
					<p className="rz-sum">{c.sum}</p>
					<p className="rz-sumt">{c.sumText}</p>
					<ul className="rz-bars">
						{c.rows.map((r) => (
							<li key={r.b}><span className="rz-bl"><b>{r.b}</b><em>{r.sum}</em></span><span className="rz-track"><i style={{ width: `${(r.n / top) * 100}%` }} /></span></li>
						))}
					</ul>
					<p className="rz-cnote">{c.note}</p>
				</a>
			</div>
		</section>
	);
}
