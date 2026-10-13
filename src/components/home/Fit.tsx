import { home } from "@content/pages/home";

// 8 · кому подойду, а кому нет.
export default function Fit() {
	const c = home.fit;
	return (
		<section id="fit">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2><p className="lead">{c.lead}</p></div>
				<div className="fitcards">
					<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{c.yesTitle}</p><ul>{c.yes.map((t) => <li key={t}>{t}</li>)}</ul></div>
					<div className="fc no"><p className="fc-h"><span className="ic">×</span>{c.noTitle}</p><ul>{c.no.map((t) => <li key={t}>{t}</li>)}</ul></div>
				</div>
				<p style={{ marginTop: "24px" }}><a href="/nastavnichestvo">{c.mentor}</a></p>
			</div>
		</section>
	);
}
