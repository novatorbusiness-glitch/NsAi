import { site } from "@/config/site";
import { mentor } from "@content/pages/nastavnichestvo";

// Н.1 · первый экран: обещание и рисунок «путь ученика на 5-й неделе».
export default function Hero() {
	const c = mentor.hero;
	const j = c.journey;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="kicker">{c.kicker}</p>
					<h1>{c.h1}</h1>
					<p className="lead">{c.lead}</p>
					<p className="sub">{c.sub}</p>
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{c.button}</a>
					<p className="under">{c.under}</p>
				</div>
				<div className="journey" aria-label={j.label}>
					<div className="jh"><span>{j.head}</span><b>{j.week}</b></div>
					<div className="jbar"><i style={{ width: j.progress }}></i></div>
					<ol>{j.steps.map((s, i) => <li key={s.title} className={s.state}><span className="jn">{i}</span><span className="jt">{s.title}</span><span className="js">{s.status}</span></li>)}</ol>
					<div className="jf">{j.foot.map((f) => <div key={f.tag}><em>{f.tag}</em>{f.text}</div>)}</div>
				</div>
			</div>
		</section>
	);
}
