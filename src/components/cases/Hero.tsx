import { keisy } from "@content/pages/keisy";
import { common } from "@content/pages/common";

// Первый экран кейсов v2: опыт целиком, две кнопки; справа экраны своих продуктов веером. Три факта — полосой под экраном.
export default function Hero() {
	const c = keisy.hero;
	return (
		<>
			<section className="hero">
				<div className="wrap hero-grid">
					<div>
						<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{c.crumb}</p>
						<div className="role"><span className="pill">{c.pill}</span></div>
						<h1 className="ph1">{c.h1}</h1>
						<p className="lead">{c.lead}</p>
						<div className="cta-row">
							<a className="btn p" href="#contact" data-goal="cta_start">{c.primary}</a>
							<a className="btn s" href="#cases">{c.secondary}</a>
						</div>
					</div>
					<div className="fan" aria-label={c.fanLabel}>
						{c.fan.map((f) => <img key={f.cls} className={f.cls} src={f.src} alt={f.alt} width={800} height={1159} />)}
					</div>
				</div>
			</section>
			<div className="hfacts">
				<div className="wrap facts">{c.facts.map((f) => <div key={f.num}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
			</div>
		</>
	);
}
