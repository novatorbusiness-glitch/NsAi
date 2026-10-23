import { home } from "@content/pages/home";
import EnvScheme from "./EnvScheme";

// Первый экран v9: оффер «войду в команду», две кнопки; справа — схема AI-среды (Илья → директор → 9 отделов) и пример ленты задач.
// Три факта — отдельной тонкой полосой под экраном, чтобы не грузить первый экран (решение Ильи 23.10).
export default function Hero() {
	const c = home.hero;
	return (
		<>
			<section className="hero">
				<div className="wrap hero-grid">
					<div>
						<div className="role"><span className="pill">{c.pill}</span></div>
						<h1>{c.h1}</h1>
						<p className="lead">{c.lead}</p>
						<div className="cta-row">
							<a className="btn p" href="#contact" data-goal="cta_start">{c.primary}</a>
							<a className="btn s" href="#extra">{c.secondary}</a>
						</div>
					</div>
					<EnvScheme />
				</div>
			</section>
			<div className="hfacts">
				<div className="wrap facts">{c.facts.map((f) => <div key={f.num}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
			</div>
		</>
	);
}
