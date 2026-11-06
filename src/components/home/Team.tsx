"use client";
import { useEffect, useState } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 03 · как это выглядит в работе (06.11): механика z.ai — активный смысл с линией загрузки, авто-переключение
// каждые 6 секунд (пауза при наведении), справа живые отрисованные сцены с анимациями.
const TABS = [
	{ id: "speed", title: "Делаю отложенное", desc: "Контент-план, разбор конкурентов, ответы клиентам и сайт делаются фоном. Вы только проверяете итог" },
	{ id: "sync", title: "Усиливаю то, что есть", desc: "Не начинаю с нуля: связываю ваши системы, докручиваю процессы и воронки" },
	{ id: "unload", title: "Разгружаю вас", desc: "Агент помнит ваш продукт, клиентов и голос. Посты и письма звучат как вы, а не как шаблон" },
	{ id: "check", title: "Отвечаю за результат", desc: "Перед сдачей работа проходит проверку в два прохода: факты, цифры, тон" },
];

function SpeedScene() {
	const rows = [
		{ av: "ТР", who: "Трафик", task: "медиаплан на месяц", st: "в работе", run: true },
		{ av: "ПР", who: "Продажи", task: "ответы на заявки", st: "готово" },
		{ av: "РАЗ", who: "Разработка", task: "бот записи", st: "готово" },
	];
	return (
		<div className="scene">
			<div className="appwin">
				<div className="winbar"><i /><i /><i /><span>моя среда · задачи недели</span></div>
				{rows.map((r, i) => (
					<div key={r.who} className="wrow" style={{ animationDelay: `${0.3 + i * 0.5}s` }}>
						<span className={`av ${i === 0 ? "a1" : i === 1 ? "a2" : "a3"}`}>{r.av}</span>
						<div className="wt"><b>{r.who}</b><span>{r.task}</span></div>
						<em className={r.run ? "st run" : "st ok"}>{r.st}</em>
					</div>
				))}
				<div className="wprog"><i /></div>
			</div>
			<div className="sctimer"><b>14 дней</b><span>→</span><b className="hi">2 дня</b><small>на тот же набор задач</small></div>
		</div>
	);
}

function SyncScene() {
	const src = ["amoCRM", "Сайт и landing", "Telegram"];
	return (
		<div className="scene">
			<div className="syncgrid">
				<div className="sync-col">
					{src.map((s, i) => <div key={s} className="sync-node" style={{ animationDelay: `${i * 0.8}s` }}>{s}</div>)}
				</div>
				<div className="sync-links" aria-hidden="true">{src.map((s, i) => <i key={s} style={{ animationDelay: `${i * 0.8}s` }} />)}</div>
				<div className="sync-hub">Среда<span>8 отделов · 204 навыка</span></div>
				<div className="sync-links" aria-hidden="true"><i style={{ animationDelay: "2.4s" }} /></div>
				<div className="sync-node biz">Дашборд владельца</div>
			</div>
			<p className="scnote">Импульсы на линиях: агенты читают ваши системы и возвращают результат в один дашборд</p>
		</div>
	);
}

function UnloadScene() {
	return (
		<div className="scene">
			<div className="appwin chat">
				<div className="winbar"><i /><i /><i /><span>telegram · заявки</span></div>
				<div className="cmsg in1">«Здравствуйте! Когда сможем обсудить смету?»</div>
				<div className="cmsg in2">«И уточните, вы ведёте контент?»</div>
				<div className="typing in2" aria-hidden="true"><i /><i /><i /></div>
				<div className="cans">Черновики ответов вашим голосом. Проверил, отправляйте</div>
				<div className="cstamp">проверено Ильёй ✓</div>
			</div>
			<p className="scnote">Клиенты не ждут вашего вечера: черновики ответов готовы, вы только отправляете</p>
		</div>
	);
}

function CheckScene() {
	const checks = ["Факты и цифры", "Тон и голос", "Полнота задачи"];
	return (
		<div className="scene">
			<div className="appwin">
				<div className="winbar"><i /><i /><i /><span>контроль качества · перед сдачей</span></div>
				{checks.map((c, i) => (
					<div key={c} className="crow" style={{ animationDelay: `${0.4 + i * 0.6}s` }}><i>✓</i>{c}</div>
				))}
				<div className="cstamp2" style={{ animationDelay: "2.4s" }}>проход 2: общая связность и тон</div>
			</div>
			<p className="scnote">Ни одна работа не уходит владельцу без двух проходов проверки</p>
		</div>
	);
}

const SCENES: Record<string, () => JSX.Element> = { speed: SpeedScene, sync: SyncScene, unload: UnloadScene, check: CheckScene };

export default function Team() {
	const c = home.team;
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	useEffect(() => {
		if (paused) return;
		const id = setInterval(() => setActive((a) => (a + 1) % TABS.length), 6000);
		return () => clearInterval(id);
	}, [paused]);
	return (
		<section id="team" className="team">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className={paused ? "ttabs paused" : "ttabs"} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
					<div className="tlist" role="tablist" aria-label="Как это выглядит в работе">
						{TABS.map((t, i) => (
							<button key={t.id} type="button" role="tab" aria-selected={active === i} className={active === i ? "titem on" : "titem"} onClick={() => setActive(i)}>
								<b>{t.title}</b>
								{active === i && <span>{t.desc}</span>}
								{active === i && <i className="tprog" key={`${t.id}-${paused}`} aria-hidden="true" />}
							</button>
						))}
					</div>
					<div className="tpanel" role="tabpanel">
						<div className="lcard scene-card" key={active}>{SCENES[TABS[active].id]()}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
