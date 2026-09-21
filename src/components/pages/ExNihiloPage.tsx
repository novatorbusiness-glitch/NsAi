import PageShell from "@/components/layout/PageShell";

/**
 * ex NIHILO — посадочная партнёра (Илья Новицкий, партнёр-исследователь).
 * Платформа самоисследования для предпринимателей: ЭЭГ, трекеры, клинические
 * шкалы, голосовой дневник, личный ИИ-агент. Структура и графика — по ТЗ:
 * оффер (+ ЭЭГ-волна до/после) → боли → решение → возможности → цифры →
 * 3 шага → тарифы → FAQ → CTA. Токены и вёрстка — по канону NCAi (см. B24uPage).
 */

const REF = "https://t.me/NihiloAI_bot?start=319756543";

const PAINS = [
	{
		t: "«Внезапно накрыло»",
		d: "Выгорание, срыв сна, упавший иммунитет. Изнутри — как гром среди ясного неба. На графике видно, что шло к этому полгода.",
	},
	{
		t: "Тренинг работает неделю",
		d: "Ретрит, дыхание, мотивация — выходишь новым, через неделю прежний. Эффект в моменте, ноль проверки на дистанции.",
	},
	{
		t: "Одна и та же стена",
		d: "Та же осень, тот же спад на третьей неделе проекта. Каждый раз кажется случайностью, потому что вы видите точку, а не линию.",
	},
];

const FEATURES = [
	{ tag: "Мозг · в моменте", t: "ЭЭГ-сессии Neiry", d: "Протоколы по 10–30 минут: глубина, скорость входа и удержание состояния под давлением — индекс MNPI." },
	{ tag: "Тело · каждый день", t: "Garmin, WHOOP, Apple", d: "Сон, пульс, ВСР, нагрузка подтягиваются сами. Видно, когда вы тратите быстрее, чем восполняете." },
	{ tag: "Жизнь · на дистанции", t: "Шкалы и дневник", d: "PHQ-9, GAD-7, PSS-10, выгорание, сон. Голосовой дневник утро / день / вечер — за минуту." },
];

const AGENT = [
	{ t: "Ничего не забывает", d: "Вся история — каждый замер, каждая запись, каждый цикл — поднимается под каждый разбор целиком." },
	{ t: "Находит связи со сдвигом", d: "«Короткий глубокий сон → спад через 5 дней». Такое не увидеть, глядя на один график." },
	{ t: "Разбор после каждой записи", d: "Наговорили в Telegram — получили разбор: что за чем шло, что совпало, где разошлись план и факт." },
	{ t: "Планинг, вехи, привычки", d: "ИИ вытаскивает задачи из ваших слов, формулирует намерение недели и считает серии привычек." },
	{ t: "Отчёт «до / после»", d: "Точка А и точка Б по клиническим шкалам и ЭЭГ. Не ощущение прогресса, а его размер." },
	{ t: "Всё в Telegram", d: "Бот и мини-приложение. Ничего не устанавливать, данные — только ваши." },
];

const NUMBERS = [
	{ v: "191", l: "участник" },
	{ v: "1 022", l: "рефлексии" },
	{ v: "209", l: "ЭЭГ-сессий" },
	{ v: "2 314", l: "разборов ИИ" },
	{ v: "26", l: "клинических шкал" },
];

const STEPS = [
	{ n: "01", t: "Заходите в бота", d: "По ссылке ниже. Открывается 7 дней полного доступа — без карты." },
	{ n: "02", t: "Точка А", d: "Проходите шкалы, подключаете трекер, делаете первую запись голосом." },
	{ n: "03", t: "Первый разбор", d: "ИИ собирает вашу картину. Дальше — ритм утро / день / вечер и замеры по циклу." },
];

const TARIFFS = [
	{ tag: "Для себя", name: "Базлайн", price: "2 500 ⭐", usd: "≈ $32 · 30 дней", feats: ["Дневник и ИИ-разборы", "Клинические шкалы", "Трекеры сна и пульса", "Планинг и привычки"] },
	{ tag: "Глубже", name: "Исследователь", price: "11 990 ⭐", usd: "≈ $150 · 30 дней", feats: ["Всё из Базлайна", "ЭЭГ-протоколы и индекс MNPI", "Практика ONTO NOTHING"], hot: true },
	{ tag: "Для практиков", name: "Исследуй свой метод", price: "9 990 ⭐", usd: "≈ $110 · 30 дней", feats: ["Для коучей и мастеров", "Ведение клиентов на платформе", "Данные вашего метода"] },
];

export const FAQ = [
	{ q: "Это медицина или психотерапия?", a: "Нет. Это самоисследование: вы измеряете себя клиническими шкалами и приборами и видите динамику. Если шкалы покажут тревожный сигнал, платформа прямо об этом скажет и посоветует специалиста." },
	{ q: "Нужны ли приборы?", a: "Для старта — нет: дневник, шкалы и разборы работают без них. Трекер (Garmin, WHOOP, Apple) добавляет тело, ЭЭГ Neiry — мозг." },
	{ q: "Сколько времени в день?", a: "3–5 минут: короткая голосовая запись утром, днём и вечером. Остальное делает ИИ." },
	{ q: "Что такое ONTO NOTHING?", a: "Авторский метод добровольного выхода из внутреннего диалога — «тишины в голове». Навык, который тренируется и проверяется по ЭЭГ: вход, глубина и удержание." },
	{ q: "Кто видит мои данные?", a: "Только вы. Данные не передаются третьим лицам; публикация в исследованиях — только обезличенно и с вашего согласия." },
	{ q: "Что если не подойдёт?", a: "7 дней бесплатно, карта не нужна. Не понравится — просто не продлеваете." },
];

export default function ExNihiloPage() {
	return (
		<PageShell>
			{/* dangerouslySetInnerHTML — см. тот же фикс в B24uPage.tsx: текстовый
			    ребёнок заставляет SSR экранировать кавычки в content:"✓", и
			    гидратация расходится с сервером на этом узле. */}
			<style dangerouslySetInnerHTML={{ __html: EXN_CSS }} />
			<div className="exn-wrap">
				{/* ── HERO ── */}
				<section className="exn-hero">
					<div className="exn-inner">
						<p className="exn-badge">
							<span className="exn-dot" />
							Партнёр NCAi · ex NIHILO · Илья Новицкий
						</p>
						<h1 className="exn-h1">
							Ваш бизнес растёт. А вы — <span className="exn-accent">восстанавливаетесь</span>?
						</h1>
						<p className="exn-sub">
							ex NIHILO — платформа, где предприниматель изучает себя как учёный: ЭЭГ, трекер сна и
							пульса, клинические шкалы и дневник сводятся в одну картину, а личный ИИ-агент находит,
							что именно держит вашу продуктивность и что её съедает.
						</p>
						<div className="exn-cta">
							<a href={REF} target="_blank" rel="noopener noreferrer" className="exn-btn" data-goal="exn_cta">
								Начать исследование в Telegram →
							</a>
							<a href="#how" className="exn-btn exn-btn-ghost">
								Как это устроено
							</a>
						</div>
						<p className="exn-trial">7 дней бесплатно · полный доступ · без карты</p>

						<svg className="exn-wave" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true">
							<path className="exn-wave-noisy" d="M0 45 L20 18 L34 70 L48 12 L62 76 L78 22 L92 66 L108 8 L122 80 L138 26 L152 62 L168 14 L184 74 L200 30 L216 60 L232 20 L250 70 L266 32 L284 58 L300 36 L320 54 L340 40" />
							<path className="exn-wave-calm" d="M340 40 C380 20 420 70 460 45 S540 20 580 45 S660 70 700 45 S780 22 820 45 S900 66 940 45 S980 30 1000 45" />
						</svg>
						<p className="exn-wave-label">β · внутренний диалог &nbsp;→&nbsp; α+θ · тишина после практики ONTO NOTHING</p>
					</div>
				</section>

				{/* ── БОЛИ ── */}
				<section className="exn-sec">
					<div className="exn-inner">
						<h2 className="exn-h2">Это не рост. Это займ у себя</h2>
						<p className="exn-lead">
							Выручка и количество дел растут, а восстановление тихо сползает месяцами. Этого никто
							не видит — потому что никто не меряет.
						</p>
						<div className="exn-grid-3">
							{PAINS.map((p) => (
								<div key={p.t} className="exn-card exn-card-pain">
									<h3 className="exn-card-t">{p.t}</h3>
									<p className="exn-card-d">{p.d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── РЕШЕНИЕ ── */}
				<section className="exn-sec exn-sec-alt" id="how">
					<div className="exn-inner">
						<h2 className="exn-h2">Не «вам стало лучше», а насколько и в чём</h2>
						<p className="exn-lead">
							ex NIHILO собирает данные тела, мозга и жизни в одном месте и превращает их в отчёты,
							которые можно сравнить с прошлым разом. Метод ONTO NOTHING учит навыку управлять
							состоянием — войти в тишину за минуты и удержать её, — а приборы проверяют, что навык
							растёт.
						</p>
						<div className="exn-grid-3">
							{FEATURES.map((f) => (
								<div key={f.t} className="exn-card">
									<span className="exn-card-tag">{f.tag}</span>
									<h3 className="exn-card-t">{f.t}</h3>
									<p className="exn-card-d">{f.d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── ИИ-АГЕНТ ── */}
				<section className="exn-sec">
					<div className="exn-inner">
						<h2 className="exn-h2">Личный ИИ-агент вашего исследования</h2>
						<div className="exn-grid-2">
							{AGENT.map((a) => (
								<div key={a.t} className="exn-card">
									<h3 className="exn-card-t">{a.t}</h3>
									<p className="exn-card-d">{a.d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── ЦИФРЫ ── */}
				<section className="exn-stats">
					<div className="exn-inner exn-stats-row">
						{NUMBERS.map((n) => (
							<div key={n.l} className="exn-stat">
								<div className="exn-stat-v">{n.v}</div>
								<div className="exn-stat-l">{n.l}</div>
							</div>
						))}
					</div>
					<p className="exn-note">Данные открытой когорты ex NIHILO, 2026.</p>
				</section>

				{/* ── 3 ШАГА ──
				    Тот же конвейер (.vz-track), что на /raspakovka и /b24u —
				    концепт №5, без JS: страница статична, .rv тут некому включать. */}
				<section className="exn-sec exn-sec-alt">
					<div className="exn-inner">
						<h2 className="exn-h2">От ссылки до первого разбора — один вечер</h2>
						<div className="vz vz-pipe" role="img" aria-label="От ссылки до первого разбора: вход в бота, точка А, первый разбор — три шага">
							<ol className="vz-track vz-track-3">
								<svg className="vz-rail" viewBox="0 0 1000 2" preserveAspectRatio="none" aria-hidden="true" focusable="false">
									<line className="vz-rail-line" x1="8" y1="1" x2="992" y2="1" />
									<rect className="vz-rail-pulse" x="8" y="0" width="110" height="2" rx="1" />
								</svg>
								{STEPS.map((s, i) => (
									<li key={s.n} className="vz-step" style={{ ["--i" as string]: i }}>
										<span className="vz-step-n">{s.n}</span>
										<span className="vz-step-t">{s.t}</span>
										<span className="vz-step-x">{s.d}</span>
									</li>
								))}
							</ol>
						</div>
					</div>
				</section>

				{/* ── ТАРИФЫ ── */}
				<section className="exn-sec">
					<div className="exn-inner">
						<h2 className="exn-h2">Оплата внутри Telegram · первые 7 дней бесплатно</h2>
						<div className="exn-grid-3">
							{TARIFFS.map((t) => (
								<div key={t.name} className={`exn-card exn-tariff${t.hot ? " exn-tariff-hot" : ""}`}>
									<span className="exn-card-tag">
										{t.tag}
										{t.hot ? <span className="exn-hot-tag">выбор большинства</span> : null}
									</span>
									<h3 className="exn-card-t">{t.name}</h3>
									<div className="exn-price">{t.price}</div>
									<span className="exn-price-usd">{t.usd}</span>
									<ul className="exn-feats">
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
				<section className="exn-sec exn-sec-alt">
					<div className="exn-inner exn-inner-narrow">
						<h2 className="exn-h2">Частые вопросы</h2>
						<div className="exn-faq">
							{FAQ.map((f) => (
								<details key={f.q} className="exn-faq-item">
									<summary>{f.q}</summary>
									<p>{f.a}</p>
								</details>
							))}
						</div>
					</div>
				</section>

				{/* ── CTA ── */}
				<section className="exn-cta-sec">
					<div className="exn-inner">
						<h2 className="exn-h2">Начните видеть свою линию, а не точку</h2>
						<p className="exn-lead">
							Первый разбор — уже сегодня вечером. Напишите мне, если хотите разобрать, с чего начать
							именно вам.
						</p>
						<div className="exn-cta">
							<a href={REF} target="_blank" rel="noopener noreferrer" className="exn-btn" data-goal="exn_cta">
								Начать 7 дней бесплатно →
							</a>
							<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" className="exn-btn exn-btn-ghost">
								Задать вопрос Илье
							</a>
						</div>
						<p className="exn-trial">
							Илья Новицкий · партнёр-исследователь ex NIHILO ·{" "}
							<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer">t.me/Ilya_novator</a>{" "}
							· <a href="mailto:ilya.novitskii@yandex.ru">ilya.novitskii@yandex.ru</a>
						</p>
						<p className="exn-disclaimer">ex NIHILO — платформа самоисследования. Не является медицинской услугой.</p>
					</div>
				</section>
			</div>
		</PageShell>
	);
}

const EXN_CSS = `
.exn-wrap { color: var(--t); }
.exn-inner { max-width: var(--max, 1280px); margin: 0 auto; padding: 0 24px; }
.exn-inner-narrow { max-width: 840px; }

.exn-hero { padding: 120px 0 56px; text-align: center; }
.exn-badge { display: inline-flex; align-items: center; gap: 8px; font-family: var(--fm, monospace); font-size: 0.8rem; color: var(--a); background: var(--ad); border: 1px solid var(--ag); padding: 8px 14px; border-radius: 999px; }
.exn-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--a); }
.exn-h1 { font-family: var(--fd, sans-serif); font-weight: 800; font-size: clamp(1.9rem, 5vw, 3.4rem); line-height: 1.12; margin: 24px 0 20px; letter-spacing: -0.01em; }
.exn-accent { color: var(--a); }
.exn-sub { font-family: var(--fs, serif); font-size: clamp(1.05rem, 2vw, 1.3rem); color: var(--t2); max-width: 720px; margin: 0 auto 32px; line-height: 1.6; }
.exn-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.exn-btn { display: inline-block; background: var(--a); color: #080808; font-weight: 700; padding: 15px 28px; border-radius: 12px; text-decoration: none; font-family: var(--fd, sans-serif); font-size: 0.95rem; transition: transform .15s var(--ease), opacity .15s var(--ease); }
.exn-btn:hover { transform: translateY(-2px); opacity: .92; }
.exn-btn-ghost { background: transparent; color: var(--t); border: 1px solid var(--br2); }
.exn-btn-ghost:hover { border-color: var(--a); color: var(--a); }
.exn-trial { margin-top: 18px; font-size: 0.85rem; color: var(--t3); }
.exn-trial a { color: var(--a); text-decoration: none; }

.exn-wave { width: 100%; max-width: 640px; height: 72px; margin: 40px auto 0; display: block; }
.exn-wave path { fill: none; stroke-width: 2; }
.exn-wave-noisy { stroke: var(--red); opacity: .75; }
.exn-wave-calm { stroke: var(--a); stroke-dasharray: 700; stroke-dashoffset: 700; animation: exn-draw 2.4s .3s var(--ease) forwards; }
@keyframes exn-draw { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) { .exn-wave-calm { animation: none; stroke-dashoffset: 0; } }
.exn-wave-label { font-family: var(--fm, monospace); font-size: 0.72rem; color: var(--t3); margin-top: 10px; letter-spacing: .02em; }

.exn-sec { padding: 72px 0; }
.exn-sec-alt { background: var(--bg2); border-top: 1px solid var(--br); border-bottom: 1px solid var(--br); }
.exn-h2 { font-family: var(--fd, sans-serif); font-weight: 700; font-size: clamp(1.4rem, 3vw, 2.2rem); text-align: center; margin: 0 0 14px; }
.exn-lead { font-family: var(--fs, serif); color: var(--t2); text-align: center; max-width: 720px; margin: 0 auto 40px; line-height: 1.6; font-size: 1.05rem; }

.exn-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.exn-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.exn-card { background: var(--bgc); border: 1px solid var(--br); border-radius: 16px; padding: 24px; }
.exn-card-tag { display: block; font-family: var(--fm, monospace); font-size: 0.7rem; letter-spacing: .08em; text-transform: uppercase; color: var(--a); margin-bottom: 10px; }
.exn-card-t { font-family: var(--fd, sans-serif); font-size: 1.05rem; font-weight: 700; margin: 0 0 10px; }
.exn-card-d { color: var(--t2); font-size: 0.95rem; line-height: 1.6; margin: 0; }
.exn-card-pain { border-color: var(--br2); }
.exn-card-pain .exn-card-t { color: var(--red); }

.exn-stats { border-top: 1px solid var(--br); border-bottom: 1px solid var(--br); background: var(--bg2); padding: 32px 0; text-align: center; }
.exn-stats-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
.exn-stat-v { font-family: var(--fm, monospace); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2.1rem); color: var(--a); font-variant-numeric: tabular-nums; }
.exn-stat-l { font-size: 0.82rem; color: var(--t2); margin-top: 4px; }
.exn-note { text-align: center; color: var(--t3); font-size: 0.8rem; margin: 16px 0 0; }

.exn-step { background: var(--bgc); border: 1px solid var(--br); border-radius: 16px; padding: 28px 24px; }
.exn-step-n { font-family: var(--fm, monospace); color: var(--a); font-size: 1.4rem; font-weight: 700; margin-bottom: 10px; }

.exn-tariff { display: flex; flex-direction: column; }
.exn-tariff-hot { border-color: var(--a); }
.exn-hot-tag { display: inline-block; margin-left: 8px; font-size: 0.65rem; color: #080808; background: var(--a); padding: 2px 8px; border-radius: 999px; vertical-align: middle; text-transform: none; letter-spacing: 0; }
.exn-price { font-family: var(--fm, monospace); font-weight: 700; font-size: 1.6rem; margin-top: 4px; }
.exn-price-usd { display: block; font-size: 0.8rem; color: var(--t3); margin-top: 2px; }
.exn-feats { list-style: none; padding: 0; margin: 14px 0 0; }
.exn-feats li { color: var(--t2); font-size: 0.85rem; padding: 4px 0 4px 18px; position: relative; }
.exn-feats li::before { content: "✓"; color: var(--a); position: absolute; left: 0; }

.exn-faq-item { background: var(--bgc); border: 1px solid var(--br); border-radius: 12px; margin-bottom: 10px; overflow: hidden; }
.exn-faq-item summary { cursor: pointer; padding: 18px 20px; font-weight: 700; font-family: var(--fd, sans-serif); font-size: 0.98rem; list-style: none; display: flex; justify-content: space-between; }
.exn-faq-item summary::after { content: "+"; color: var(--a); font-size: 1.3rem; line-height: 1; }
.exn-faq-item[open] summary::after { content: "–"; }
.exn-faq-item p { margin: 0; padding: 0 20px 18px; color: var(--t2); line-height: 1.6; font-size: 0.95rem; }

.exn-cta-sec { padding: 90px 0 110px; text-align: center; background: var(--bg2); border-top: 1px solid var(--br); }
.exn-disclaimer { margin-top: 14px; font-size: 0.76rem; color: var(--t3); }

@media (max-width: 900px) {
  .exn-grid-3, .exn-grid-2, .exn-stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .exn-hero { padding: 90px 0 40px; }
  .exn-grid-3, .exn-grid-2, .exn-stats-row { grid-template-columns: 1fr; }
  .exn-cta { flex-direction: column; align-items: stretch; }
  .exn-btn { text-align: center; }
}
`;
