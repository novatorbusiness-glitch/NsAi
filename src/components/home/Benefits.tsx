import { home } from "@content/pages/home";

// 3 · что вы получаете, что можно поручить и что не входит.
export default function Benefits() {
	const c = home.benefits;
	return (
		<section id="scope" className="scope">
			<div className="wrap">
				<div className="section-head">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
				</div>
				<div className="grid g3 benefits">
					{c.cards.map((k) => <div className="card" key={k.title}><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<div className="scope-row">
					<div className="wall"><p className="lbl">{c.canLabel}</p><div className="tags">{c.can.map((t) => <span key={t}>{t}</span>)}</div></div>
					<div className="notdo"><p className="lbl">{c.notLabel}</p><ul>{c.not.map((t) => <li key={t}>{t}</li>)}</ul></div>
				</div>
				<p className="note">{c.note}</p>
			</div>
		</section>
	);
}
