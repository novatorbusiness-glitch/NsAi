import { home } from "@content/pages/home";

// Схема ИИ-среды (Илья → 8 отделов → ваш бизнес + пример ленты задач; директор — агент внутри «Управления», решение 29.10): первый экран главной и «Как работаю в команде».
export default function EnvScheme() {
	const e = home.hero.env;
	return (
		<div className="env" role="img" aria-label={e.label}>
			<div className="env-bar"><i></i><i></i><i></i><span>{e.bar}</span></div>
			<div className="env-body">
				<div className="env-node me"><b>{e.me}</b><span>{e.meNote}</span></div>
				<div className="env-bus" aria-hidden="true"></div>
				<ul className="env-deps">
					{home.team.deps.map((d) => <li key={d.name}><b>{d.name}</b><span>{d.agents.length}</span></li>)}
					<li className="add">{e.more}</li>
				</ul>
				<div className="env-bus down" aria-hidden="true"></div>
				<div className="env-node biz"><b>{e.biz}</b><span>{e.bizNote}</span></div>
				<p className="env-fl">{e.feedLabel}</p>
				<ul className="env-feed">
					{e.feed.map((f) => <li key={f.who} className={f.st === "готово" ? "ok" : "run"}><span className="who">{f.who}</span><span className="t">{f.task}</span><span className="st">{f.st}</span></li>)}
				</ul>
			</div>
		</div>
	);
}
