import { process } from "@content/pages/kak-my-rabotaem";

// Что можно поручить и что не входит (перенесено с главной 13.10: состав работы — на этой странице).
export default function Scope() {
	const c = process.scope;
	return (
		<section id="scope" className="scope">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2><p className="lead">{c.lead}</p></div>
				<div className="scope-row">
					<div className="wall"><p className="lbl">{c.canLabel}</p><div className="tags">{c.can.map((t) => <span key={t}>{t}</span>)}</div></div>
					<div className="notdo"><p className="lbl">{c.notLabel}</p><ul>{c.not.map((t) => <li key={t}>{t}</li>)}</ul></div>
				</div>
			</div>
		</section>
	);
}
