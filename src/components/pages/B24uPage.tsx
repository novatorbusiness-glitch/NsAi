import PageShell from "@/components/layout/PageShell";

/**
 * B24U — посадочная дистрибьютора (Илья Новицкий).
 * Продающая страница AI-чатбота для сайта. Структура по канону:
 * hero (оффер + CTA) → боли → решение → выгоды → соцдоказательство →
 * как работает (3 шага) → тарифы → FAQ → CTA.
 *
 * Самодостаточная: стили в <style> с префиксом b24u-, токены берём из
 * tokens.css (тёмная премиум-тема NCAi). Статическая страница (серверный
 * компонент) — работает на GitHub Pages без JS.
 */

const STATS = [
	{ v: "60–80%", l: "конверсия чат-бота" },
	{ v: "72%", l: "из чата в лид" },
	{ v: "+260%", l: "рост конверсии сайта" },
	{ v: "25+", l: "языков, автодетект" },
];

const PAINS = [
	{
		t: "Заявка пришла ночью — ответ утром",
		d: "Первые пять минут решают. Пока вы спите или заняты, горячий клиент пишет конкуренту, который ответил сразу.",
	},
	{
		t: "Менеджер отвечает на одни и те же вопросы",
		d: "«Сколько стоит», «как заказать», «есть ли доставка» — рутина съедает часы продажника вместо сделок.",
	},
	{
		t: "Сайт молчит, когда по нему ходят",
		d: "Посетитель пришёл, полистал и ушёл без следа. Никто не предложил помощь, не поймал контакт, не довёл до заявки.",
	},
];

const BENEFITS = [
	{
		t: "Отвечает 24/7",
		d: "Чат-бот отвечает мгновенно в любое время суток — без выходных, больничных и «не успел». Лиды не ждут вашего ответа.",
	},
	{
		t: "Обучен на вашем сайте",
		d: "Сканирует страницы сайта и отвечает по базе знаний вашего бизнеса — не общими фразами, а по вашим условиям и ценам.",
	},
	{
		t: "25 языков, автодетект",
		d: "Сам определяет язык посетителя и отвечает на нём. Иностранные клиенты перестают теряться.",
	},
	{
		t: "Лиды в Telegram и email",
		d: "Каждая заявка и диалог приходят в отчёт — в Telegram или на почту. Ни один лид не пропадает в тишине.",
	},
	{
		t: "Настройка без кода за 15 минут",
		d: "Ни программистов, ни вёрстки: сканирование сайта → подключение виджета → чат-бот работает в тот же день.",
	},
	{
		t: "Интеграции с CRM",
		d: "Bitrix24, HubSpot, Pipedrive, GA/GTM и кастомные webhooks — чат-бот встраивается в вашу текущую систему.",
	},
];

const STEPS = [
	{
		n: "01",
		t: "Сканируем сайт",
		d: "Чат-бот изучает страницы вашего сайта и учится отвечать по его содержимому — база знаний собирается сама.",
	},
	{
		n: "02",
		t: "Настраиваем под нишу",
		d: "Добавляю промпты, кнопки, приветствие и сценарии под ваш бизнес — чтобы бот продавал, а не просто отвечал.",
	},
	{
		n: "03",
		t: "Виджет начинает продавать",
		d: "Чат-бот живёт на сайте, ловит посетителей 24/7 и передаёт вам горячие лиды. Вы следите по отчёту в Telegram.",
	},
];

const TARIFFS = [
	{
		name: "Start AI",
		desc: "Быстрый старт: ответы по сканированию сайта, отчёт по email-лидам, настройка кнопок.",
		feats: ["Ответы по скану сайта", "Отчёт по email-лидам", "Настройка кнопок"],
	},
	{
		name: "Smart AI",
		desc: "Доступ к аккаунту клиента, настраиваемые ответы ИИ и отчёт о лидах прямо в Telegram.",
		feats: ["Всё из Start AI", "Доступ к аккаунту", "Настраиваемые ответы ИИ", "Отчёт о лидах в Telegram"],
		hot: true,
	},
	{
		name: "Pro AI",
		desc: "Полная аналитика, интеграция с CRM и GA/GTM, история диалогов — для роста.",
		feats: ["Всё из Smart AI", "Полная аналитика", "Интеграция CRM", "GA/GTM", "История бесед"],
	},
	{
		name: "Mega AI",
		desc: "Система бронирования и обогащение контекста ИИ — максимум автоматизации.",
		feats: ["Всё из Pro AI", "Система бронирования", "Обогащение контекста ИИ"],
	},
];

const FAQ = [
	{
		q: "Как быстро чат-бот начинает работать?",
		a: "В день подключения. Сканирование сайта и настройка занимают около 15 минут без кода. Донастройка базы знаний и промптов под нишу — до 1–3 дней.",
	},
	{
		q: "Насколько он «умный»? Не будет ли нести чушь?",
		a: "Бот отвечает по базе знаний вашего сайта, а не выдумывает. Я дополнительно настраиваю промпты и сценарии под вашу нишу, чтобы ответы были точными и продающими.",
	},
	{
		q: "Какие языки поддерживает?",
		a: "25+ языков с автодетектом. Чат-бот сам определяет язык посетителя и отвечает на нём.",
	},
	{
		q: "Сколько это стоит?",
		a: "Настройка под ключ — от 15 000 ₽ разово. Лицензия B24U — по подписке, по тарифам вендора (Start / Smart / Pro / Mega). Первые 7 дней — бесплатный триал с полным доступом, без карты.",
	},
	{
		q: "Что если не подойдёт?",
		a: "7 дней бесплатного триала дают полный доступ — вы проверяете чат-бот на реальных посетителях до оплаты лицензии. Настройка фиксируется в смете до старта.",
	},
	{
		q: "Мне нужен чат-бот или целая AI-команда NCAi?",
		a: "Чат-бот B24U — это быстрый первый шаг: он закрывает заявки на сайте уже сегодня. Если нужно больше — воронку, контент, автоматизацию целиком — это закрывает «Распаковка» NCAi. Можно начать с чат-бота, а команду подключить следом.",
	},
];

export default function B24uPage() {
	return (
		<PageShell>
			<style>{B24U_CSS}</style>
			<div className="b24u-wrap">
				{/* ── HERO ── */}
				<section className="b24u-hero">
					<div className="b24u-inner">
						<p className="b24u-badge">
							<span className="b24u-dot" />
							Дистрибьютор B24U · Илья Новицкий
						</p>
						<h1 className="b24u-h1">
							Ваш сайт отвечает клиентам{" "}
							<span className="b24u-accent">24/7</span> — без найма и без выходных
						</h1>
						<p className="b24u-sub">
							AI-чатбот B24U конвертирует до 72% диалогов в лид и поднимает конверсию сайта
							в среднем на 260%. Обучается на вашем сайте, настраивается без кода за 15 минут.
						</p>
						<div className="b24u-cta">
							<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" className="b24u-btn" data-goal="b24u_cta">
								Подключить чат-бот за 15 минут →
							</a>
							<a href="https://b24u.com" target="_blank" rel="noopener noreferrer" className="b24u-btn b24u-btn-ghost">
								Узнать про B24U
							</a>
						</div>
						<p className="b24u-trial">7 дней бесплатно · полный доступ · без карты</p>
					</div>
				</section>

				{/* ── СТАТЫ ── */}
				<section className="b24u-stats">
					<div className="b24u-inner b24u-stats-row">
						{STATS.map((s) => (
							<div key={s.l} className="b24u-stat">
								<div className="b24u-stat-v">{s.v}</div>
								<div className="b24u-stat-l">{s.l}</div>
							</div>
						))}
					</div>
				</section>

				{/* ── БОЛИ ── */}
				<section className="b24u-sec">
					<div className="b24u-inner">
						<h2 className="b24u-h2">Пока вы не отвечаете — клиент уходит к конкуренту</h2>
						<p className="b24u-lead">
							Сайт есть, трафик идёт, но заявки теряются на тишине. Вот три дыры, через которые
							утекают деньги:
						</p>
						<div className="b24u-pains">
							{PAINS.map((p) => (
								<div key={p.t} className="b24u-card">
									<h3 className="b24u-card-t">{p.t}</h3>
									<p className="b24u-card-d">{p.d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── РЕШЕНИЕ ── */}
				<section className="b24u-sec b24u-sec-solution">
					<div className="b24u-inner">
						<h2 className="b24u-h2">Решение — AI-чатбот, который отвечает за сайт</h2>
						<p className="b24u-lead">
							B24U — это интеллектуальный виджет чата, который понимает посетителя, отвечает по
							базе знаний вашего сайта и ведёт его к заявке. Вы получаете лиды, а не тишину.
						</p>
						<div className="b24u-benefits">
							{BENEFITS.map((b) => (
								<div key={b.t} className="b24u-card">
									<h3 className="b24u-card-t">{b.t}</h3>
									<p className="b24u-card-d">{b.d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── СОЦДОКАЗАТЕЛЬСТВО ── */}
				<section className="b24u-sec">
					<div className="b24u-inner">
						<h2 className="b24u-h2">Цифры партнёров — не обещания</h2>
						<div className="b24u-proof">
							<div className="b24u-proof-item">
								<div className="b24u-proof-v">$3640</div>
								<div className="b24u-proof-l">первый месяц партнёра</div>
							</div>
							<div className="b24u-proof-item">
								<div className="b24u-proof-v">146%/мес</div>
								<div className="b24u-proof-l">рост дохода партнёра</div>
							</div>
							<div className="b24u-proof-item">
								<div className="b24u-proof-v">12 дней</div>
								<div className="b24u-proof-l">до первого дохода</div>
							</div>
							<div className="b24u-proof-item">
								<div className="b24u-proof-v">3000+</div>
								<div className="b24u-proof-l">сайтов на чат-боте B24U</div>
							</div>
						</div>
						<p className="b24u-note">
							Средние показатели — по анализу более 3000 сайтов, использующих B24U AI Chatbot.
						</p>
					</div>
				</section>

				{/* ── КАК РАБОТАЕТ ── */}
				<section className="b24u-sec b24u-sec-solution">
					<div className="b24u-inner">
						<h2 className="b24u-h2">Как это работает — 3 шага</h2>
						<div className="b24u-steps">
							{STEPS.map((s) => (
								<div key={s.n} className="b24u-step">
									<div className="b24u-step-n">{s.n}</div>
									<h3 className="b24u-card-t">{s.t}</h3>
									<p className="b24u-card-d">{s.d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── ТАРИФЫ ── */}
				<section className="b24u-sec">
					<div className="b24u-inner">
						<h2 className="b24u-h2">Тарифы B24U</h2>
						<p className="b24u-lead">
							Лицензия — по тарифам вендора (цены уточняются при подключении). Настройка под ключ
							— от 15 000 ₽ разово, включает базу знаний, промпты, кнопки и обучение.
						</p>
						<div className="b24u-tariffs">
							{TARIFFS.map((t) => (
								<div key={t.name} className={`b24u-card b24u-tariff${t.hot ? " b24u-tariff-hot" : ""}`}>
									<h3 className="b24u-card-t">
										{t.name}
										{t.hot ? <span className="b24u-hot-tag">популярный</span> : null}
									</h3>
									<p className="b24u-card-d">{t.desc}</p>
									<ul className="b24u-feats">
										{t.feats.map((f) => (
											<li key={f}>{f}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── FAQ ── */}
				<section className="b24u-sec">
					<div className="b24u-inner b24u-inner-narrow">
						<h2 className="b24u-h2">Частые вопросы</h2>
						<div className="b24u-faq">
							{FAQ.map((f) => (
								<details key={f.q} className="b24u-faq-item">
									<summary>{f.q}</summary>
									<p>{f.a}</p>
								</details>
							))}
						</div>
					</div>
				</section>

				{/* ── CTA ── */}
				<section className="b24u-cta-sec">
					<div className="b24u-inner">
						<h2 className="b24u-h2">Начните с чат-бота — лиды уже завтра</h2>
						<p className="b24u-lead">
							Пока вы решаете про команду, сайт может уже продавать. Напишите — подключу чат-бот
							B24U и настрою под ваш бизнес за 15 минут.
						</p>
						<div className="b24u-cta">
							<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" className="b24u-btn" data-goal="b24u_cta">
								Подключить чат-бот за 15 минут →
							</a>
							<a href="/raspakovka" className="b24u-btn b24u-btn-ghost">
								Нужна целая AI-команда → Распаковка NCAi
							</a>
						</div>
						<p className="b24u-trial">
							Илья Новицкий · дистрибьютор B24U ·{" "}
							<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer">t.me/Ilya_novator</a>{" "}
							· <a href="mailto:ilya.novitskii@yandex.ru">ilya.novitskii@yandex.ru</a>
						</p>
					</div>
				</section>
			</div>
		</PageShell>
	);
}

const B24U_CSS = `
.b24u-wrap { color: var(--t); }
.b24u-inner { max-width: var(--max, 1280px); margin: 0 auto; padding: 0 24px; }
.b24u-inner-narrow { max-width: 840px; }

.b24u-hero { padding: 120px 0 48px; text-align: center; }
.b24u-badge { display: inline-flex; align-items: center; gap: 8px; font-family: var(--fm, monospace); font-size: 0.8rem; color: var(--a); background: var(--ad); border: 1px solid var(--ag); padding: 8px 14px; border-radius: 999px; }
.b24u-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--a); }
.b24u-h1 { font-family: var(--fd, sans-serif); font-weight: 800; font-size: clamp(1.9rem, 5vw, 3.4rem); line-height: 1.12; margin: 24px 0 20px; letter-spacing: -0.01em; }
.b24u-accent { color: var(--a); }
.b24u-sub { font-family: var(--fs, serif); font-size: clamp(1.05rem, 2vw, 1.3rem); color: var(--t2); max-width: 720px; margin: 0 auto 32px; line-height: 1.6; }
.b24u-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.b24u-btn { display: inline-block; background: var(--a); color: #080808; font-weight: 700; padding: 15px 28px; border-radius: 12px; text-decoration: none; font-family: var(--fd, sans-serif); font-size: 0.95rem; transition: transform .15s var(--ease), opacity .15s var(--ease); }
.b24u-btn:hover { transform: translateY(-2px); opacity: .92; }
.b24u-btn-ghost { background: transparent; color: var(--t); border: 1px solid var(--br2); }
.b24u-btn-ghost:hover { border-color: var(--a); color: var(--a); }
.b24u-trial { margin-top: 18px; font-size: 0.85rem; color: var(--t3); }
.b24u-trial a { color: var(--a); text-decoration: none; }

.b24u-stats { border-top: 1px solid var(--br); border-bottom: 1px solid var(--br); background: var(--bg2); }
.b24u-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 32px 24px; }
.b24u-stat { text-align: center; }
.b24u-stat-v { font-family: var(--fd, sans-serif); font-weight: 800; font-size: 1.8rem; color: var(--a); }
.b24u-stat-l { font-size: 0.85rem; color: var(--t2); margin-top: 4px; }

.b24u-sec { padding: 72px 0; }
.b24u-sec-solution { background: var(--bg2); border-top: 1px solid var(--br); border-bottom: 1px solid var(--br); }
.b24u-h2 { font-family: var(--fd, sans-serif); font-weight: 700; font-size: clamp(1.4rem, 3vw, 2.2rem); text-align: center; margin: 0 0 14px; }
.b24u-lead { font-family: var(--fs, serif); color: var(--t2); text-align: center; max-width: 720px; margin: 0 auto 40px; line-height: 1.6; font-size: 1.05rem; }
.b24u-pains, .b24u-benefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.b24u-card { background: var(--bgc); border: 1px solid var(--br); border-radius: 16px; padding: 24px; }
.b24u-card-t { font-family: var(--fd, sans-serif); font-size: 1.05rem; font-weight: 700; margin: 0 0 10px; }
.b24u-card-d { color: var(--t2); font-size: 0.95rem; line-height: 1.6; margin: 0; }
.b24u-pains .b24u-card { border-color: var(--br2); }
.b24u-pains .b24u-card-t { color: var(--red); }

.b24u-proof { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.b24u-proof-item { text-align: center; background: var(--bgc); border: 1px solid var(--ag); border-radius: 16px; padding: 24px; }
.b24u-proof-v { font-family: var(--fd, sans-serif); font-weight: 800; font-size: 1.7rem; color: var(--a); }
.b24u-proof-l { color: var(--t2); font-size: 0.85rem; margin-top: 6px; }
.b24u-note { text-align: center; color: var(--t3); font-size: 0.8rem; margin-top: 16px; }

.b24u-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.b24u-step { background: var(--bgc); border: 1px solid var(--br); border-radius: 16px; padding: 28px 24px; }
.b24u-step-n { font-family: var(--fm, monospace); color: var(--a); font-size: 1.4rem; font-weight: 700; margin-bottom: 10px; }

.b24u-tariffs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.b24u-tariff-hot { border-color: var(--a); }
.b24u-hot-tag { display: inline-block; margin-left: 8px; font-size: 0.65rem; color: #080808; background: var(--a); padding: 2px 8px; border-radius: 999px; vertical-align: middle; }
.b24u-feats { list-style: none; padding: 0; margin: 14px 0 0; }
.b24u-feats li { color: var(--t2); font-size: 0.85rem; padding: 4px 0 4px 18px; position: relative; }
.b24u-feats li::before { content: "✓"; color: var(--a); position: absolute; left: 0; }

.b24u-faq-item { background: var(--bgc); border: 1px solid var(--br); border-radius: 12px; margin-bottom: 10px; overflow: hidden; }
.b24u-faq-item summary { cursor: pointer; padding: 18px 20px; font-weight: 700; font-family: var(--fd, sans-serif); font-size: 0.98rem; list-style: none; display: flex; justify-content: space-between; }
.b24u-faq-item summary::after { content: "+"; color: var(--a); font-size: 1.3rem; line-height: 1; }
.b24u-faq-item[open] summary::after { content: "–"; }
.b24u-faq-item p { margin: 0; padding: 0 20px 18px; color: var(--t2); line-height: 1.6; font-size: 0.95rem; }

.b24u-cta-sec { padding: 90px 0 110px; text-align: center; background: var(--bg2); border-top: 1px solid var(--br); }

@media (max-width: 900px) {
  .b24u-pains, .b24u-benefits, .b24u-steps, .b24u-proof { grid-template-columns: repeat(2, 1fr); }
  .b24u-tariffs { grid-template-columns: repeat(2, 1fr); }
  .b24u-stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .b24u-hero { padding: 90px 0 40px; }
  .b24u-pains, .b24u-benefits, .b24u-steps, .b24u-proof, .b24u-tariffs, .b24u-stats-row { grid-template-columns: 1fr; }
  .b24u-cta { flex-direction: column; align-items: stretch; }
  .b24u-btn { text-align: center; }
}
`;
