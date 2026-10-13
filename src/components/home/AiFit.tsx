import { home } from "@content/pages/home";

// 5а · где AI ускоряет, а где только мешает.
export default function AiFit() {
	const c = home.ai;
	return (
		<section id="ai" className="alt ai">
			<div className="wrap">
				<div className="section-head">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
				</div>
				<div className="grid g2 ai-yes">
					{c.yes.map((k) => <div className="card" key={k.label}><p className="lbl">{k.label}</p><p>{k.text}</p></div>)}
				</div>
				<div className="notdo ai-no"><p className="lbl">{c.noLabel}</p><ul>
					{c.no.map((t) => <li key={t}>{t}</li>)}
				</ul></div>
				<p className="closing">{c.closing}</p>
			</div>
		</section>
	);
}
