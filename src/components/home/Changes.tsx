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
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>ваш сайт · обновлено сегодня</span></div>
			<img className="shot" width={1280} height={900} src="/images/site/shot-new-home.jpg" alt="Скрин новой главной страницы: оффер «Масштабируйте бизнес с ИИ-агентами», кнопка разбора и бренды среды" loading="lazy" />
			<p className="lnote">Файл памяти из моей среды: что вы продаёте, кому и каким тоном. Это первый шаг работы</p>
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
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>карта проекта · воронка</span></div>
			<img className="shot" width={1280} height={900} src="/images/site/shot-karta.jpg" alt="Карта проекта AI-сервиса: слои и связи" loading="lazy" />
			<p className="lnote">Навык проверки запускается перед каждой сдачей: сначала смысл и цифры, потом форма. Так ошибки не доезжают до клиента</p>
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
