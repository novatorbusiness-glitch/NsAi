"use client";
import { useEffect, useRef, useState } from "react";
import SectionHead from "@/components/ui/SectionHead";

// 04 · что меняется (06.11): пять направлений с линией загрузки (как у z.ai),
// справа — светлые отрисованные артефакты-результаты, то, что клиент держит в руках.
const TABS = [
	{ id: "pack", title: "Упаковка", desc: "Сайт не обновлялся год → обновляется сам, вы проверяете" },
	{ id: "traffic", title: "Трафик", desc: "Решения на глаз → разбор цифр готовым списком" },
	{ id: "funnel", title: "Автоматизация", desc: "Воронка «после сезона» → запускается по порядку" },
	{ id: "clients", title: "Клиенты", desc: "Ответы зависят от вашего вечера → напоминает и ведёт среда" },
	{ id: "tools", title: "Инструменты", desc: "Всё руками → свои инструменты остаются у вас" },
];

function PackArt() {
	const rows = ["Оффер — переписан под боли клиентов", "Кейсы — добавлен свежий результат", "Тексты — звучат вашим голосом"];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>ваш сайт · обновлено сегодня</span></div>
			{rows.map((r, i) => (
				<div key={r} className="rrow" style={{ animationDelay: `${0.3 + i * 0.5}s` }}><div className="rt"><b>{r.split(" — ")[0]}</b><span>{r.split(" — ")[1]}</span></div><em className="ok">обновлено</em></div>
			))}
			<div className="lgrow" style={{ animationDelay: "2s" }}><span>новый оффер уже на главной</span></div>
		</div>
	);
}

function TrafficArt() {
	const rows = [
		{ t: "Усилить", d: "рилс с разбором кейса клиента", k: "up" },
		{ t: "Выключить", d: "реклама без оффера, минус 40 тыс ₽ в месяц", k: "down" },
		{ t: "Проверить", d: "посадочная под запрос «bot записи»", k: "mid" },
	];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>разбор трафика · решения</span></div>
			{rows.map((r, i) => (
				<div key={r.t} className="rrow" style={{ animationDelay: `${0.3 + i * 0.5}s` }}><div className="rt"><b>{r.t}</b><span>{r.d}</span></div><em className={r.k}>{r.k === "up" ? "рост" : r.k === "down" ? "минус" : "тест"}</em></div>
			))}
			<p className="lnote">Список готов к понедельнику: вы решаете, что запускаем</p>
		</div>
	);
}

function FunnelArt() {
	const steps = [
		{ t: "Реклама у блогеров", st: "работает" },
		{ t: "Лендинг с оффером", st: "готово" },
		{ t: "Заявка в бот", st: "в работе" },
		{ t: "Продажа", st: "план" },
	];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>воронка · по порядку</span></div>
			{steps.map((r, i) => (
				<div key={r.t} className="rrow" style={{ animationDelay: `${0.3 + i * 0.4}s` }}><div className="rt"><b>{r.t}</b></div><em className={r.st === "работает" || r.st === "готово" ? "ok" : r.st === "план" ? "dim" : "run"}>{r.st}</em></div>
			))}
			<p className="lnote">Каждая ступень появляется по порядку, неделями</p>
		</div>
	);
}

function ClientsArt() {
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>клиенты · ответы ведёт среда</span></div>
			<div className="cmsg in1" style={{ color: "#15181a" }}>«Здравствуйте! Вы ведёте контент?»</div>
			<div className="cans2" style={{ animationDelay: "1.2s" }}>«Добрый день! Ведём: план, посты, рассылки. Пришлю примеры»</div>
			<p className="lnote" style={{ animationDelay: "2.2s" }}>Ответ не зависит от вашего вечера</p>
		</div>
	);
}

function ToolsArt() {
	const rows = ["Кому написать", "Готовый текст сообщения", "Прогноз визитов"];
	return (
		<div className="lcard awin">
			<div className="winbar light"><i /><i /><i /><span>ваш инструмент · под ваш процесс</span></div>
			{rows.map((r, i) => (
				<div key={r} className="rrow" style={{ animationDelay: `${0.3 + i * 0.5}s` }}><div className="rt"><b>{r}</b><span>{["среда подсказывает", "в вашем голосе", "считает по вашей базе"][i]}</span></div><em className="ok">ваш</em></div>
			))}
			<p className="lnote">Остаётся в вашем бизнесе: данные и доступы ваши</p>
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
				<SectionHead num="04" label="Что меняется" title="Пять направлений, где появляется темп" lead="Каждая строка: как обычно у собственника и как становится со мной" />
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
