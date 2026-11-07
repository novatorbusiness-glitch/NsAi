"use client";
import { useEffect, useRef, useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import FitScheme from "@/components/ui/FitScheme";

// 04 · что меняется (06.11): пять направлений, линия загрузки (фиолетовая, rAF),
// справа — отрисованные артефакты: экран сайта, разбор цифр, воронка, возврат клиенток, дашборд-инструмент.
const TABS = [
	{ id: "pack", title: "Упаковка", desc: "Бизнес вырос, а упаковка осталась прежней: сайт, посты и презентации рассказывают о вас старую историю. Клиент это считывает и уходит туда, где выглядит сильнее → веду упаковку постоянно, вы утверждаете перед выпуском" },
	{ id: "traffic", title: "Трафик", desc: "Реклама идёт, а что приносит заявки и что сливает бюджет, не видно. Разбираю рынок и конкурентов до запуска, после запуска цифры показывают, что работает → усиливаем это, пустое закрываем" },
	{ id: "sales", title: "Продажи", desc: "Обращения падают в разные окна, и ответ ждёт живой человек. Агент отвечает за секунды и закрывает разговор на целевое действие, каждая сделка видна в CRM" },
	{ id: "funnel", title: "Автоматизация", desc: "Порядок в бизнесе живёт в головах и в чатах, поэтому передача дела превращается в хаос. Переношу процессы в среду: воронки и документы работают по порядку, по каждой задаче видно статус" },
	{ id: "analytics", title: "Аналитика", desc: "Продажи считаются по итогу месяца, а где именно теряются клиенты, не видно. Дашборд воронки держит конверсии каждого шага перед глазами каждый день: узкое место найдено до того, как оно стало дорогим" },
	{ id: "tools", title: "Инструменты", desc: "Бизнес склеен из чужих сервисов и таблиц, и ни один не подходит под ваши задачи → своя ОС: дашборд, статистика и мини-сервисы под ваш процесс. Это то, что нельзя купить готовым" },
];

function PackArt() {
	const items = [
		{ t: "Контент-план", ico: <g><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 2v4M16 2v4M4 9h16M8 14h5" /></g> },
		{ t: "Сайт", ico: <g><rect x="3" y="4" width="18" height="14" rx="3" /><path d="M3 9h18M6 12h7" /></g> },
		{ t: "Презентация", ico: <g><rect x="4" y="4" width="16" height="11" rx="2" /><path d="M12 15v4M8 21h8M8 9h8" /></g> },
		{ t: "Фирменный стиль", ico: <g><circle cx="9" cy="10" r="5" /><circle cx="15" cy="14" r="5" /></g> },
		{ t: "Сценарии под видео", ico: <g><rect x="3" y="6" width="14" height="12" rx="3" /><path d="M17 10l5-3v10l-5-3" /></g> },
	];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>упаковка · материалы</span></div>
			<div className="vitr">
				{items.map((it) => (
					<div className="vit" key={it.t}>
						<span className="vi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{it.ico}</svg></span>
						<b>{it.t}</b>
					</div>
				))}
			</div>
		</div>
	);
}

function TrafficArt() {
	const nodes = [
		{ t: "Разбор конкурентов", s: "действующие компании: цены, офферы", ico: <g><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" /></g> },
		{ t: "Конверсионные креативы", s: "под сегменты, с оффером", ico: <g><path d="M13 3 5 13h6l-2 8 8-11h-6l2-7z" /></g> },
		{ t: "SEO + Метрика", s: "одна картина: трафик и поведение", ico: <g><circle cx="8" cy="12" r="4.5" /><circle cx="16" cy="12" r="4.5" /><path d="M12 12h.01" /></g> },
		{ t: "Рост показателей", s: "что работает, усиливаем", ico: <g><path d="M4 18 10 11l3 3 7-8" /><path d="M15 6h5v5" /></g> },
	];
	return (
		<div className="lcard awin dark-scene">
			<div className="winbar light"><i /><i /><i /><span>связка · рост трафика</span></div>
			<FitScheme width={600}>
				<div className="flow" role="img" aria-label="Связка трафика: разбор конкурентов, креативы, SEO с Метрикой, рост показателей">
					{nodes.map((n, i) => (
						<div key={n.t} style={{ display: "contents" }}>
							<div className="fnode">
								<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{n.ico}</svg></span>
								<b>{n.t}</b>
								<span>{n.s}</span>
							</div>
							{i < nodes.length - 1 && <div className="flink" aria-hidden="true" style={{ "--fd": `${i * 0.6}s` } as React.CSSProperties} />}
						</div>
					))}
				</div>
			</FitScheme>
		</div>
	);
}

function FunnelArt() {
	const nodes = [
		{ t: "Виджет на сайте", s: "клиент пишет", ico: <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" /> },
		{ t: "Агент общается", s: "закрывает на заявку", ico: <g><rect x="4" y="6" width="16" height="12" rx="4" /><path d="M9 12h.01M12 12h.01M15 12h.01" /></g> },
		{ t: "Заявка в CRM", s: "карточка клиента", ico: <g><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M7 10h6M7 14h10" /></g> },
		{ t: "Отчёт в чат команды", s: "в Telegram", ico: <path d="M21 4 3 11l6 2 2 6 4-5 6-10z" /> },
	];
	return (
		<div className="lcard awin dark-scene">
			<div className="winbar light"><i /><i /><i /><span>связка · путь заявки</span></div>
			<FitScheme width={600}>
				<div className="flow" role="img" aria-label="Связка автоматизации: виджет, агент, CRM, отчёт в чат команды">
					{nodes.map((n, i) => (
						<div key={n.t} style={{ display: "contents" }}>
							<div className="fnode">
								<span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{n.ico}</svg></span>
								<b>{n.t}</b>
								<span>{n.s}</span>
							</div>
							{i < nodes.length - 1 && <div className="flink" aria-hidden="true" style={{ "--fd": `${i * 0.6}s` } as React.CSSProperties} />}
						</div>
					))}
				</div>
			</FitScheme>
		</div>
	);
}

function SalesArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>переписка · закрытие на заявку</span></div>
			<div className="schat">
				<p className="sm in">Здравствуйте! Нужна интеграция CRM с телефонией, возможно ли?</p>
				<p className="sm out">Да, подключаем за две недели. Направил бриф из 4 вопросов, заполните в удобное время.</p>
				<p className="sm in">Заполнил, отправил.</p>
				<p className="sm out">Принял, передал инженеру. Расчёт готовим сегодня, готовую смету направлю прямо сюда в чат.</p>
				<span className="sbadge">Заявка создана в CRM</span>
			</div>
		</div>
	);
}

function DashArt() {
	const steps = [
		{ t: "Заявки", n: "120", w: 100, c: "старт" },
		{ t: "Квалифицировано", n: "84", w: 70, c: "70%" },
		{ t: "КП отправлено", n: "32", w: 27, c: "38%" },
		{ t: "Сделка", n: "7", w: 6, c: "22%" },
	];
	const sum = [
		{ s: "Средний чек", v: "130\u00A0000 ₽" },
		{ s: "Маркетинг · 1\u00A0500 ₽ за заявку", v: "180\u00A0000 ₽" },
		{ s: "Деньги в кассе", v: "910\u00A0000 ₽" },
		{ s: "В кассе без маркетинга", v: "730\u00A0000 ₽", hi: true },
	];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>аналитика · воронка продаж</span></div>
			<div className="funtab">
				{steps.map((st) => (
					<div className="fun-row" key={st.t}>
						<span className="fun-t">{st.t}</span>
						<span className="fun-bar"><i style={{ width: `${st.w}%` }} /></span>
						<b className="fun-n">{st.n}</b>
						<span className="fun-c">{st.c}</span>
					</div>
				))}
			</div>
			<div className="funsum">
				{sum.map((x) => (
					<div className={x.hi ? "fs hi" : "fs"} key={x.s}>
						<span>{x.s}</span>
						<b>{x.v}</b>
					</div>
				))}
			</div>
		</div>
	);
}

function ToolsArt() {
	const apps = [
		{ t: "Упаковка", ico: <g><path d="M12 3 4 7v10l8 4 8-4V7l-8-4z" /><path d="M4 7l8 4 8-4M12 11v10" /></g> },
		{ t: "Трафик", ico: <g><path d="M4 18 10 11l3 3 7-8" /><path d="M15 6h5v5" /></g> },
		{ t: "Продажи", ico: <g><path d="M4 12c3-6 13-6 16 0" /><circle cx="12" cy="16" r="4" /><path d="M12 14v4" /></g> },
		{ t: "Автоматизация", ico: <g><circle cx="12" cy="12" r="4" /><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" /></g> },
		{ t: "Аналитика", ico: <g><path d="M5 20V10M12 20V4M19 20v-7" /></g> },
		{ t: "Документы", ico: <g><path d="M6 3h9l4 4v14H6V3z" /><path d="M9 12h7M9 16h7" /></g> },
		{ t: "Финансы", ico: <g><circle cx="12" cy="12" r="8" /><path d="M10 8h2.5a2.5 2.5 0 1 1 0 5H10V8zM10 13v3M14 8l-4 8" /></g> },
		{ t: "Клиенты", ico: <g><circle cx="9" cy="8" r="3.5" /><path d="M3.5 19c.7-3 3-4.5 5.5-4.5S13.8 16 14.5 19" /><circle cx="17" cy="9" r="2.6" /><path d="M16 14.7c2.4.3 4 1.7 4.5 4.3" /></g> },
		{ t: "Задачи", ico: <g><path d="M4 7l2 2 3-3M4 15l2 2 3-3M13 8h7M13 16h7" /></g> },
		{ t: "Отчёты", ico: <g><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 13h8M8 17h5" /></g> },
		{ t: "Рассылки", ico: <g><path d="M21 4 3 11l6 2 2 6 4-5 6-10z" /><path d="M9 13v5l3-3" /></g> },
		{ t: "База знаний", ico: <g><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></g> },
	];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>своя ОС · ваш бизнес</span></div>
			<div className="osgrid">
				{apps.map((a) => (
					<div className="os-app" key={a.t}>
						<span className="oi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{a.ico}</svg></span>
						<b>{a.t}</b>
					</div>
				))}
			</div>
		</div>
	);
}

// Высокие сцены на телефоне целиком уменьшаются под ширину экрана, чтобы табы и схема помещались в один экран (потоки с .flow уже масштабируются внутри).
const FIT_IDS = new Set(["pack", "sales", "analytics", "tools"]);
const SCENES: Record<string, () => JSX.Element> = { pack: PackArt, traffic: TrafficArt, sales: SalesArt, funnel: FunnelArt, analytics: DashArt, tools: ToolsArt };

export default function Changes() {
	const [active, setActive] = useState(0);
	const barRef = useRef<HTMLElement | null>(null);
	const sliderRef = useRef<HTMLDivElement | null>(null);
	const touchX = useRef<number | null>(null);
	const [sh, setSh] = useState<number | null>(null);
	const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
	const onTouchEnd = (e: React.TouchEvent) => {
		if (touchX.current === null) return;
		const dx = e.changedTouches[0].clientX - touchX.current;
		if (Math.abs(dx) > 48) setActive((a) => (a + (dx < 0 ? 1 : -1) + TABS.length) % TABS.length);
		touchX.current = null;
	};
	// На телефоне высота слайдера равна высоте активного слайда, иначе схема висит над пустотой до высоты самого высокого таба.
	useEffect(() => {
		const box = sliderRef.current;
		const slide = box?.firstElementChild?.children[active] as HTMLElement | undefined;
		if (!box || !slide) return;
		const mq = window.matchMedia("(max-width:768px)");
		const fit = () => setSh(mq.matches ? slide.offsetHeight : null);
		fit();
		const ro = new ResizeObserver(fit);
		ro.observe(slide);
		mq.addEventListener("change", fit);
		return () => { ro.disconnect(); mq.removeEventListener("change", fit); };
	}, [active]);
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
	useEffect(() => {
		const fit = () => {
			const sl = sliderRef.current;
			if (!sl) return;
			const flow = sl.querySelector(".flow") as HTMLElement | null;
			if (!flow) return;
			const k = Math.min(1, sl.clientWidth / 640);
			flow.style.transform = `scale(${k})`;
			const fitEl = flow.parentElement as HTMLElement | null;
			if (fitEl) fitEl.style.height = `${Math.round(320 * k)}px`;
		};
		fit();
		window.addEventListener("resize", fit);
		return () => window.removeEventListener("resize", fit);
	}, []);
	return (
		<section id="changes" className="changes">
			<div className="wrap">
				<SectionHead num="04" label="Что меняется" title="Шесть мест, где бизнес теряет время и деньги" lead="По каждому направлению: что меняется со мной. Справа материалы из моей среды" />
				<div className="ttabs">
					<div className="tlist" role="tablist" aria-label="Что меняется в бизнесе">
						{TABS.map((t, i) => (
							<button key={t.id} type="button" role="tab" aria-selected={active === i} className={active === i ? "titem on" : "titem"} onClick={() => setActive(i)}>
								<b>{t.title}</b>
								{active === i && <span>{t.desc}</span>}
								{active === i && <i className="tprog" ref={barRef} aria-hidden="true" />}
							</button>
						))}
					</div>
				<div className="t-mdesc">{TABS[active].desc}</div>
				<div className="slider" ref={sliderRef} style={sh ? { height: sh } : undefined} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
					<div className="slider-track" style={{ transform: `translateX(-${active * 100}%)` }}>
						{TABS.map((t, i) => (
							<div className="slide" key={t.id}>{FIT_IDS.has(t.id) ? <FitScheme width={560}>{SCENES[t.id]()}</FitScheme> : SCENES[t.id]()}</div>
						))}
					</div>
				</div>
				</div>
			</div>
		</section>
	);
}
