import { home } from "@content/pages/home";

// Схема AI-среды (Илья → директор → 8 отделов + пример ленты задач): первый экран главной и «Как работаю в команде».
export default function EnvScheme() {
	const e = home.hero.env;
	return (
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
	);
}
