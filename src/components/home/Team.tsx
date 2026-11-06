"use client";
import { useState } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import EnvScheme from "./EnvScheme";

// 02 · моя ИИ-среда (06.11): четыре смысла слева (как у z.ai), светлая визуализация справа меняется по клику.
// Активный пункт — с пояснением и линией снизу. Только клик, без автопереключения.
const TABS = [
	{
		id: "speed",
		title: "Дни вместо недель",
		desc: "Контент, клиенты, сайт и анализ делаются фоном. Вы проверяете готовое, а не делаете сами",
	},
	{
		id: "roles",
		title: "Отдел без найма",
		desc: "19 агентов в 8 отделах: тексты, анализ, код, клиенты. Подключаю только тех, кто нужен именно вам",
	},
	{
		id: "memory",
		title: "Помнит вас и ваш бизнес",
		desc: "Агент знает ваш продукт, клиентов и голос. Не нужно объяснять заново, как писать и что важно",
	},
	{
		id: "manage",
		title: "Я отвечаю за результат",
		desc: "Настройка, промпты и контроль качества — моя работа. Вы видите итог и принимаете решения",
	},
];

function SpeedViz() {
	const feed = [
		{ who: "Трафик", task: "медиаплан на месяц", st: "✓ готово" },
		{ who: "Продажи", task: "ответы на новые заявки", st: "· в работе" },
		{ who: "Разработка", task: "бот записи клиентов", st: "✓ готово" },
	];
	return (
		<div className="lcard">
			<span className="lbadge">проверено Ильёй</span>
			<div className="lbig">19<small>ИИ-агентов в 8 отделах работают на ваш бизнес</small></div>
			<div className="lcards">
				{feed.map((f) => (
					<div key={f.who} className={f.st.includes("работе") ? "lrow run" : "lrow"}>
						<div><span className="who">{f.who}</span><span className="t">{f.task}</span></div>
						<span className="st">{f.st}</span>
					</div>
				))}
			</div>
		</div>
	);
}

function MemoryViz() {
	const rows = [
		["Вы", "кто вы и чем занимаетесь"],
		["Продукт", "что продаёте и почём"],
		["Клиенты", "кто они и что им важно"],
		["Голос", "как вы говорите и пишете"],
		["Правила", "что можно и что нельзя"],
	];
	return (
		<div className="lcard">
			<div className="ltitle">Память агента · AGENTS.md</div>
			<div className="lcards">
				{rows.map(([b, t]) => (
					<div key={b} className="lrow"><div><span className="who">{b}</span><span className="t">{t}</span></div></div>
				))}
			</div>
			<p className="lnote">Заполнили один раз. Дальше агент помнит сам</p>
		</div>
	);
}

function ManageViz() {
	const you = ["Ставите задачу обычными словами", "Принимаете результат или отправляете на доработку", "Решаете, что дальше в бизнесе"];
	const me = ["Собираю среду и пишу промпты", "Слежу за скоростью и качеством", "Проверяю каждый результат сам"];
	return (
		<div className="lcard two">
			<div>
				<div className="ltitle">Вы</div>
				<ul className="lrows">{you.map((t) => <li key={t}>{t}</li>)}</ul>
			</div>
			<div>
				<div className="ltitle">Я</div>
				<ul className="lrows">{me.map((t) => <li key={t}>{t}</li>)}</ul>
			</div>
		</div>
	);
}

export default function Team() {
	const c = home.team;
	const [active, setActive] = useState(0);
	return (
		<section id="team" className="team">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="ttabs">
					<div className="tlist" role="tablist" aria-label="Что даёт моя ИИ-среда">
						{TABS.map((t, i) => (
							<button key={t.id} type="button" role="tab" aria-selected={active === i} className={active === i ? "titem on" : "titem"} onClick={() => setActive(i)}>
								<b>{t.title}</b>
								{active === i && <span>{t.desc}</span>}
							</button>
						))}
					</div>
					<div className="tpanel" role="tabpanel">
						{active === 0 && <SpeedViz />}
						{active === 1 && <EnvScheme />}
						{active === 2 && <MemoryViz />}
						{active === 3 && <ManageViz />}
					</div>
				</div>
			</div>
		</section>
	);
}
