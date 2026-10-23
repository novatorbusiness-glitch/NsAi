import { home } from "@content/pages/home";

// Первый экран v9: оффер «войду в команду», две кнопки; справа — схема AI-среды (Илья → директор → 9 отделов) и пример ленты задач.
// Три факта — отдельной тонкой полосой под экраном, чтобы не грузить первый экран (решение Ильи 23.10).
export default function Hero() {
	const c = home.hero;
	const e = c.env;
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
							<a className="btn s" href="#team">{c.secondary}</a>
						</div>
					</div>
					<div className="env" role="img" aria-label={e.label}>
						<div className="env-bar"><i></i><i></i><i></i><span>{e.bar}</span></div>
						<div className="env-body">
							<div className="env-top">
								<div className="env-node me"><b>{e.me}</b><span>{e.meNote}</span></div>
								<span className="env-arrow" aria-hidden="true">→</span>
								<div className="env-node dir"><b>{e.director}</b><span>{e.directorNote}</span></div>
							</div>
							<ul className="env-deps">
								{home.team.deps.map((d) => <li key={d.name}><b>{d.name}</b><span>{d.agents.length}</span></li>)}
								<li className="add">{e.more}</li>
							</ul>
							<p className="env-fl">{e.feedLabel}</p>
							<ul className="env-feed">
								{e.feed.map((f) => <li key={f.who} className={f.st === "готово" ? "ok" : "run"}><span className="who">{f.who}</span><span className="t">{f.task}</span><span className="st">{f.st}</span></li>)}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div className="hfacts">
				<div className="wrap facts">{c.facts.map((f) => <div key={f.num}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
			</div>
		</>
	);
}
