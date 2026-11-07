"use client";
import { useEffect, useRef, useState } from "react";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 03 · как это выглядит в работе (06.11): механика z.ai — активный смысл с линией загрузки, авто-переключение
// каждые 6 секунд (пауза при наведении), справа живые отрисованные сцены с анимациями.
const TABS = [
	{ id: "speed", title: "Делаю отложенное", desc: "У каждого бизнеса есть слой задач, от которых зависит рост, но которые не горят. Они переносятся годами, потому что каждый день занят текучкой. Двигаю их я, вам возвращается сделанная работа" },
	{ id: "sync", title: "Усиливаю то, что есть", desc: "Внедрение обычно значит всё переделать, и поэтому оно пугает. Я работаю с тем, во что вы уже вложили деньги: связываю системы между собой и довожу их до полной отдачи" },
	{ id: "unload", title: "Снимаю рутину", desc: "Рутинные дела разбросаны по чатам, таблицам и голове: что‑то теряется. Привожу их в систему, где всё связано и видно, а вы занимаетесь делом" },
	{ id: "check", title: "Отвечаю за результат", desc: "Работа не уходит в туман. Перед сдачей всё проходит проверку на факты и тон, а в пятницу приходит отчёт: что сделано, что в процессе, что нужно от вас" },
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
			<p className="scnote">CRM, сайт и мессенджеры сходятся в одном месте: картина бизнеса перед вами</p>
		</div>
	);
}

function OrderScene() {
	const junk = [
		{ t: "ответить в 3 чатах", l: 2, tp: 4, r: -8 },
		{ t: "напомнить себе", l: 44, tp: 2, r: 6 },
		{ t: "перенести в таблицу", l: 4, tp: 27, r: 4 },
		{ t: "кто это вообще?", l: 52, tp: 25, r: -10 },
		{ t: "найти переписку", l: 3, tp: 50, r: 7 },
		{ t: "внести в CRM", l: 50, tp: 48, r: -6 },
		{ t: "не забыть позвонить", l: 3, tp: 75, r: -5 },
		{ t: "свести отчёт руками", l: 47, tp: 73, r: 9 },
	];
	return (
		<div className="scene">
			<div className="order2">
				<div className="o-chaos">
					<span className="olab">хаос</span>
					{junk.map((j) => (
						<i key={j.t} className="ojunk" style={{ left: `${j.l}%`, top: `${j.tp}%`, "--rot": `${j.r}deg` } as React.CSSProperties}>{j.t}</i>
					))}
				</div>
				<div className="o-arr" aria-hidden="true">→</div>
				<div className="o-order">
					<span className="olab ok">порядок</span>
					<div className="o-map"><img src="/images/site/order-map.jpg" width={1740} height={1160} alt="Граф Obsidian: карта процессов и заметок среды" loading="lazy" /></div>
				</div>
			</div>
			<p className="scnote">Инженерный граф моей ИИ-среды: все процессы жёстко связаны между собой, поэтому ни одна задача не теряется</p>
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
			<p className="scnote">Пример из моей среды, для вас такой отчёт соберётся из ваших задач</p>
		</div>
	);
}

const SCENES: Record<string, () => JSX.Element> = { speed: SpeedScene, sync: SyncScene, unload: OrderScene, check: CheckScene };

export default function Team() {
	const c = home.team;
	const [active, setActive] = useState(0);
	const barRef = useRef<HTMLElement | null>(null);
	useEffect(() => {
		let raf: number | null = null;
		let start: number | null = null;
		const step = (t: number) => {
			if (start === null) start = t;
			const p = Math.min((t - start) / 10000, 1);
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
