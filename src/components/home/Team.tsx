"use client";
import { useEffect, useRef, useState } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 03 · как это выглядит в работе (06.11): механика z.ai — активный смысл с линией загрузки, авто-переключение
// каждые 6 секунд (пауза при наведении), справа живые отрисованные сцены с анимациями.
const TABS = [
	{ id: "speed", title: "Делаю отложенное", desc: "Контент-план, разбор конкурентов, ответы клиентам и сайт делаются фоном. Вы только проверяете итог" },
	{ id: "sync", title: "Усиливаю то, что есть", desc: "Не начинаю с нуля: связываю ваши системы, докручиваю процессы и воронки" },
	{ id: "unload", title: "Снимаю рутину", desc: "Агент помнит ваш продукт, клиентов и голос. Посты и письма звучат как вы, а не как шаблон" },
	{ id: "check", title: "Отвечаю за результат", desc: "Работу проверяю я и контролёр качества. В пятницу вы получаете отчёт: что сделано, что дальше" },
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
			</div>
			<div className="sctimer"><b>14 дней</b><span>→</span><b className="hi">2 дня</b><small>на тот же набор задач</small></div>
		</div>
	);
}

function SyncScene() {
	const src = ["amoCRM", "Сайт и landing", "Telegram"];
	return (
		<div className="scene">
			<div className="sync3">
				<div className="scol">
					{src.map((s) => <div key={s} className="sync-node">{s}</div>)}
				</div>
				<div className="lines3" aria-hidden="true">
					{src.map((s) => <div key={s} className="sync-line"><i /></div>)}
				</div>
				<div className="sync-hub">Среда<span>8 отделов · 204 навыка</span></div>
				<div className="lines1" aria-hidden="true"><div className="sync-line"><i /></div></div>
				<div className="dbcol"><div className="sync-node biz">Дашборд владельца</div></div>
			</div>
			<p className="scnote">Импульсы: агенты читают ваши системы и возвращают результат в один дашборд</p>
		</div>
	);
}

function UnloadScene() {
	return (
		<div className="scene">
			<div className="appwin chat">
				<div className="winbar"><i /><i /><i /><span>telegram · заявки</span></div>
				<div className="cmsg in1">«Здравствуйте! Когда можем обсудить смету?»</div>
				<div className="cmsg in2">«И уточните, вы ведёте контент?»</div>
				<div className="typing" aria-hidden="true"><i /><i /><i /></div>
				<div className="cans">«Добрый день! Контент ведём: план, посты, рассылки. По смете удобно завтра после 15:00, перед встречей пришлю короткий бриф»</div>
							</div>
			<p className="scnote">Агент обучен на вашей базе знаний и отвечает клиентам сам. Черновики не нужны</p>
		</div>
	);
}

function CheckScene() {
	const rows = [
		{ t: "Упаковка: правки на сайт", st: "сдано" },
		{ t: "Продажи: разбор заявок", st: "сдано" },
		{ t: "Дальше: воронка повторных продаж", st: "в работе" },
	];
	return (
		<div className="scene">
			<div className="appwin">
				<div className="winbar"><i /><i /><i /><span>отчёт владельцу · пятница</span></div>
				{rows.map((r, i) => (
					<div key={r.t} className="rrow" style={{ animationDelay: `${0.3 + i * 0.5}s` }}>
						<div className="rt"><b>{r.t.split(": ")[0]}</b><span>{r.t.split(": ")[1]}</span></div>
						<em className={r.st === "сдано" ? "ok" : "run"}>{r.st}</em>
					</div>
				))}
			</div>
			<p className="scnote">Пример из моей среды: каждую пятницу такой отчёт уходит владельцу</p>
		</div>
	);
}

const SCENES: Record<string, () => JSX.Element> = { speed: SpeedScene, sync: SyncScene, unload: UnloadScene, check: CheckScene };

export default function Team() {
	const c = home.team;
	const [active, setActive] = useState(0);
	const barRef = useRef<HTMLElement | null>(null);
	useEffect(() => {
		let raf: number | null = null;
		let start: number | null = null;
		const step = (t: number) => {
			if (start === null) start = t;
			const p = Math.min((t - start) / 8000, 1);
			if (barRef.current) barRef.current.style.width = (p * 100).toFixed(2) + "%";
			if (p >= 1) { setActive((a) => (a + 1) % TABS.length); return; }
			raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => { if (raf !== null) cancelAnimationFrame(raf); };
	}, [active]);
	return (
		<section id="team" className="team">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="ttabs">
					<div className="tlist" role="tablist" aria-label="Как это выглядит в работе">
						{TABS.map((t, i) => (
							<button key={t.id} type="button" role="tab" aria-selected={active === i} className={active === i ? "titem on" : "titem"} onClick={() => setActive(i)}>
								<b>{t.title}</b>
								{active === i && <span>{t.desc}</span>}
								{active === i && <i className="tprog" ref={barRef} aria-hidden="true" />}
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
