import Rich from "@/components/ui/Rich";
import { keisy } from "@content/pages/keisy";

// К.3 · голова, опыт и система: карточки, схема работы, «под капотом».
export default function System() {
	const c = keisy.system;
	const h = c.hood;
	const t = c.tools;
	return (
		<section id="system">
			<div className="wrap">
				<div className="section-head" style={{ maxWidth: "820px" }}>
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
					<p className="sub"><Rich t={c.sub} /></p>
				</div>
				<div className="grid g2">
					{c.cards.map((k) => <div className="card" key={k.title}><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<div className="hood" aria-label={h.label}>
					<div className="hood-h"><span className="dot"></span>{h.head}</div>
					<div className="hl hl-top">
						<div className="hn you"><b>{h.you.title}</b><span>{h.you.text}</span></div>
						<div className="hx">⇄</div>
						<div className="hn me"><b>{h.me.title}</b><span>{h.me.text}</span></div>
					</div>
					<div className="hw"><i></i></div>
					<div className="hl"><div className="hn coord"><b>{h.coord.title}</b><span>{h.coord.text}</span></div></div>
					<div className="hw"><i></i></div>
					<div className="hl agents">
						{h.agents.map((a) => <span key={a}>{a}</span>)}<span className="more">{h.agentsMore}</span>
					</div>
					<div className="hw"><i></i></div>
					<div className="hl tri">
						{h.tri.map((b) => <div className="hb" key={b.tag}><em>{b.tag}</em><b>{b.title}</b><span>{b.text}</span></div>)}
					</div>
					<div className="hw"><i></i></div>
					<div className="hl"><div className="hn base"><b>{h.base.title}</b><span>{h.base.text}</span></div></div>
				</div>
				<p className="hood-cap">{c.hoodCap}</p>
				<div className="split static" style={{ marginTop: "40px" }}>
					<div className="head">
						<h3 style={{ fontSize: "22px" }}>{t.h3}</h3>
						<p className="sub" style={{ margin: "6px 0 10px" }}>{t.sub}</p>
						<details className="tools"><summary>{t.summary}</summary>
							<div className="stack">
								{t.groups.map((g) => <div key={g.tag}><em>{g.tag}</em><small>{g.text}</small><p>{g.items.map((i) => <span key={i}>{i}</span>)}</p></div>)}
							</div>
						</details>
					</div>
					<div>
						<figure className="window" style={{ margin: "0" }}><div className="bar"><i></i><i></i><i></i><span>{t.window}</span></div><img src={t.shot.src} alt={t.shot.alt} width={1400} height={824} loading="lazy" /></figure>
						<p className="cap">{t.cap}</p>
						<div className="card soft" style={{ marginTop: "18px" }}><h3>{t.okidelo.title}</h3><p>{t.okidelo.text}</p></div>
					</div>
				</div>
			</div>
		</section>
	);
}
