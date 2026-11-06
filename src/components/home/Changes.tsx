"use client";
import { useEffect, useRef, useState } from "react";
import SectionHead from "@/components/ui/SectionHead";

// 04 · что меняется (06.11): пять направлений, линия загрузки (фиолетовая, rAF),
// справа — отрисованные артефакты: экран сайта, разбор цифр, воронка, возврат клиенток, дашборд-инструмент.
const TABS = [
	{ id: "pack", title: "Упаковка", desc: "Бизнес вырос, а упаковка осталась прежней: сайт, посты и презентации рассказывают о вас старую историю. Клиент это считывает и уходит туда, где выглядит сильнее → веду упаковку постоянно, вы утверждаете перед выпуском" },
	{ id: "traffic", title: "Трафик", desc: "Реклама идёт, а что приносит заявки и что сливает бюджет, не видно. Разбираю рынок и конкурентов до запуска, цифры после → что работает, усиливаем, что пустое, закрываем" },
	{ id: "funnel", title: "Автоматизация", desc: "Порядок в бизнесе живёт в головах и в чатах, поэтому передача дела превращается в хаос. Переношу процессы в среду: воронки и документы работают по порядку, по каждой задаче видно статус" },
	{ id: "clients", title: "Клиенты", desc: "Заявки стоят дорого, а купившие клиенты лежат в базе без движения. Повторная продажа дешевле привлечения, но ею некогда заниматься → работу с базой веду постоянно: возвраты, продления, реакция на тишину, а не когда вспомнилось" },
	{ id: "tools", title: "Инструменты", desc: "Бизнес склеен из чужих сервисов и таблиц, и ни один не подходит под ваши задачи. Собираю свои инструменты: дашборд, статистика, мини-сервисы для команды. Это то, что нельзя купить готовым" },
];

function PackArt() {
	const rows = [
		{ d: "02.11", t: "Где взять первых 20 платящих клиентов, если бюджета на рекламу нет" },
		{ d: "05.11", t: "Почему мы откладываем автоматизацию, хотя знаем, что надо" },
		{ d: "06.11", t: "Промпт без системы похож на ключ от чужой двери" },
		{ d: "08.11", t: "Я мог бы сделать презентацию одной кнопкой. Но иду по шагам" },
	];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>контент-план · ноябрь</span></div>
			<div className="cplan">
				{rows.map((r) => (
					<div className="cp-row" key={r.d}>
						<span className="cp-d">{r.d}</span>
						<b>{r.t}</b>
					</div>
				))}
			</div>
			<div className="cshelf" aria-label="Материалы упаковки">
				<span>Посты</span>
				<span>Рассылки</span>
				<span>Страницы сайта</span>
				<span>Промпты</span>
			</div>
			<p className="lnote">Реальный контент-план из моей среды: посты идут по графику, страницы и письма к ним собраны рядом</p>
		</div>
	);
}

function TrafficArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>разбор заявок · пример</span></div>
			<img className="shot" width={1280} height={900} src="/images/site/shot-razbor.jpg" alt="Пример разбора заявок: воронка и места потерь с расчётом" loading="lazy" />
			<p className="lnote">Страница из разбора конкурента по моему проекту: цены, обещания, сильные и слабые места</p>
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
			<p className="lnote">Связка из моей среды: заявка проходит путь по порядку, каждый шаг я проверяю</p>
		</div>
	);
}

function ClientsArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>возврат клиенток · GAZE</span></div>
			<img className="shot" width={640} height={1280} src="/images/gaze/okoshko.jpg" alt="Мини-апп GAZE: «Есть окошко» — кому написать и готовый текст сообщения" loading="lazy" />
			<p className="lnote">Экран GAZE, система моей жены: окно записи и готовый текст сообщения</p>
		</div>
	);
}

function ToolsArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>статистика бота · дашборд</span></div>
			<img className="shot" width={640} height={1280} src="/images/gaze/analytics.jpg" alt="Дашборд статистики бота GAZE: визиты, возвраты, динамика" loading="lazy" />
			<p className="lnote">Инструмент делаю под задачу: статистика, история и нужные документы под рукой</p>
		</div>
	);
}

const SCENES: Record<string, () => JSX.Element> = { pack: PackArt, traffic: TrafficArt, funnel: FunnelArt, clients: ClientsArt, tools: ToolsArt };

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
