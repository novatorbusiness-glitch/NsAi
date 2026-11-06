"use client";
import { useEffect, useRef, useState } from "react";
import SectionHead from "@/components/ui/SectionHead";

// 04 · что меняется (06.11): пять направлений, линия загрузки (фиолетовая, rAF),
// справа — отрисованные артефакты: экран сайта, разбор цифр, воронка, возврат клиенток, дашборд-инструмент.
const TABS = [
	{ id: "pack", title: "Упаковка", desc: "Бизнес вырос, а упаковка осталась прежней: сайт, посты и презентации рассказывают о вас старую историю. Клиент это считывает и уходит туда, где выглядит сильнее → веду упаковку постоянно, вы утверждаете перед выпуском" },
	{ id: "traffic", title: "Трафик", desc: "Реклама идёт, а что приносит заявки и что сливает бюджет, не видно. Разбираю рынок и конкурентов до запуска, цифры после → что работает, усиливаем, что пустое, закрываем" },
	{ id: "sales", title: "Продажи", desc: "Обращения падают в разные окна, и ответ ждёт живой человек → агент отвечает за минуты и закрывает разговор на заявку, каждая сделка видна в CRM" },
	{ id: "funnel", title: "Автоматизация", desc: "Порядок в бизнесе живёт в головах и в чатах, поэтому передача дела превращается в хаос. Переношу процессы в среду: воронки и документы работают по порядку, по каждой задаче видно статус" },
	{ id: "tools", title: "Инструменты", desc: "Бизнес склеен из чужих сервисов и таблиц, и ни один не подходит под ваши задачи. Собираю свои инструменты: дашборд, статистика, мини-сервисы для команды. Это то, что нельзя купить готовым" },
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
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>разбор заявок · пример</span></div>
			<img className="shot" width={1280} height={900} src="/images/site/shot-razbor.jpg" alt="Пример разбора заявок: воронка и места потерь с расчётом" loading="lazy" />
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
			<div className="flow" role="img" aria-label="Связка автоматизации: форма, CRM, письмо клиенту, диалог с агентом, отчёт владельцу">
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
		</div>
	);
}

function SalesArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>переписка · закрытие на заявку</span></div>
			<div className="schat">
				<p className="sm in">Можно записаться на завтра к вашему мастеру?</p>
				<p className="sm out">Добрый день. Есть 14:00 и 16:30, куда удобнее?</p>
				<p className="sm in">Давайте в 16:30</p>
				<p className="sm out">Готово: записал на 16:30, адрес и напоминание отправил</p>
				<span className="sbadge">Заявка создана в CRM</span>
			</div>
		</div>
	);
}

function ToolsArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>статистика бота · дашборд</span></div>
			<img className="shot" width={640} height={1280} src="/images/gaze/analytics.jpg" alt="Дашборд статистики бота GAZE: визиты, возвраты, динамика" loading="lazy" />
		</div>
	);
}

const SCENES: Record<string, () => JSX.Element> = { pack: PackArt, traffic: TrafficArt, sales: SalesArt, funnel: FunnelArt, tools: ToolsArt };

export default function Changes() {
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
		<section id="changes" className="changes">
			<div className="wrap">
				<SectionHead num="04" label="Что меняется" title="Пять мест, где бизнес теряет время и деньги" lead="По каждому направлению: как работает сейчас и как становится со мной. Справа материалы из моей среды" />
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
					<div className="tpanel" role="tabpanel">
						<div className="lcard scene-card light-scene" key={active}>{SCENES[TABS[active].id]()}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
