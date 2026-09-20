"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Страница «О проекте» (стиль exnihilo.life/o-proekte): что это, чем занимаюсь,
// продукты, метод, цифры, связь.
export default function AboutProject() {
	const { lang } = useLang();
	const ru = lang === "ru";

	const blocks = [
		{
			icon: "🧠",
			title: ru ? "Нейромаркетинг" : "Neuromarketing",
			text: ru
				? "Понимание того, как первичный мозг принимает решения за доли секунды — и как выстроить текст, оффер и воронку так, чтобы они говорили с этим мозгом, а не с корой."
				: "Understanding how the primal brain decides in fractions of a second — and how to build copy, offers and funnels that speak to that brain, not the cortex.",
		},
		{
			icon: "⚙️",
			title: ru ? "Инженерия систем" : "Systems engineering",
			text: ru
				? "Продажи — это система, а не набор приёмов. Продуктовая матрица, анатомия воронки, цепочки касаний, автоматизация: собираю так, чтобы работало без «чуда» и без зависимости от одного человека."
				: "Sales are a system, not a bag of tricks. Product matrix, funnel anatomy, touch sequences, automation: built so it works without magic and without dependence on one person.",
		},
		{
			icon: "🤖",
			title: ru ? "AI-автоматизация" : "AI automation",
			text: ru
				? "Цифровые сотрудники, которые закрывают рутину: копирайтинг, обработка заявок, касания, отчёты. AI — не «ещё один чат», а рабочая сила, встроенная в вашу систему."
				: "Digital employees that handle the routine: copywriting, lead processing, touches, reports. AI is not 'one more chat' — it is a workforce built into your system.",
		},
	];

	// Карта развития. Даты старта разработки не заявлены, а взяты из базы:
	// первый запуск агента 20.08.2026, первый воркспейс 27.08.2026.
	// Поэтому прошлое и настоящее помечены иначе, чем планы.
	const road: { when: string; what: string; text: string; state: "done" | "now" | "plan"; proof?: string }[] = [
		{
			when: ru ? "2020–2025" : "2020–2025",
			what: ru ? "Агентство Novator.vip" : "Novator.vip agency",
			text: ru
				? "Пять лет своего агентства маркетинга и автоматизации: 300+ проектов, 50M+ ₽ в запусках. Самые активные годы продаж — 2023–2025."
				: "Five years running a marketing and automation agency: 300+ projects, 50M+ ₽ in launches. The busiest sales years were 2023–2025.",
			state: "done",
		},
		{
			when: ru ? "Ноябрь 2025" : "November 2025",
			what: ru ? "Выход из агентства" : "Leaving the agency",
			text: ru
				? "Модель перестала развиваться: снаружи работающий бизнес, изнутри — бег по дорожке. Вышел, чтобы собрать систему, которая не держится на людях."
				: "The model stopped growing: a working business from outside, a treadmill from inside. I left to build a system that doesn't rest on headcount.",
			state: "done",
		},
		{
			when: ru ? "Первая половина 2026" : "First half of 2026",
			what: ru ? "Данные и методология" : "Data and methodology",
			text: ru
				? "Не разработка, а сбор фактуры: что реально повторяется в воронках, где они рвутся. Из этого выросла книга «Нейро-Воронка» — 6 глав, 30 подглав."
				: "Not development but groundwork: what actually repeats across funnels and where they break. That became the book Neuro-Funnel — 6 chapters, 30 subchapters.",
			state: "done",
		},
		{
			when: ru ? "20 августа 2026" : "20 August 2026",
			what: ru ? "Старт активной разработки" : "Active development starts",
			text: ru
				? "Первый запуск агента в рабочей системе. Через неделю развёрнут первый воркспейс — с этого момента платформа существует не на бумаге."
				: "The first agent run in the live system. A week later the first workspace was provisioned — from that point the platform existed for real.",
			state: "done",
			proof: ru ? "дата из базы, не заявление" : "date from the database, not a claim",
		},
		{
			when: ru ? "Сентябрь 2026" : "September 2026",
			what: ru ? "Система работает на себе" : "The system runs on itself",
			text: ru
				? "За первый месяц — 719 запусков агентов и 295 задач в собственном воркспейсе: платформа обкатывается на разработке самой себя, а не на слайдах."
				: "In the first month: 719 agent runs and 295 tasks in our own workspace — the platform is being tested by building itself, not on slides.",
			state: "now",
			proof: ru ? "цифры из базы на 20.09.2026" : "figures from the database, 20.09.2026",
		},
		{
			when: ru ? "До конца 2026" : "By end of 2026",
			what: ru ? "Первые клиенты на месячном цикле" : "First clients on the monthly cycle",
			text: ru
				? "Приёмка задач и критерии готовности работают на каждой задаче, кабинет показывает проверки и историю правок. Продаём месяц работы, а не подписку."
				: "Task intake and acceptance criteria applied to every task; the workspace shows reviews and revision history. We sell the month of work, not a subscription.",
			state: "plan",
		},
		{
			when: ru ? "Первая половина 2027" : "First half of 2027",
			what: ru ? "Распаковка и подписка в продажу" : "Unboxing and subscription go on sale",
			text: ru
				? "Только после того, как метод обкатан на живых бизнесах. Подписка — продукт самообслуживания, и выпускать её раньше значит отдать клиента один на один с сырой системой."
				: "Only after the method has been proven on real businesses. A subscription is self-serve, and shipping it early means leaving the client alone with a raw system.",
			state: "plan",
		},
		{
			when: ru ? "Вторая половина 2027" : "Second half of 2027",
			what: ru ? "Масштаб по нишам" : "Scaling across niches",
			text: ru
				? "Готовые отраслевые шаблоны команд и задач, чтобы новый клиент получал рабочую доску в первый день, а не пустой кабинет."
				: "Ready industry templates for teams and tasks, so a new client gets a working board on day one instead of an empty workspace.",
			state: "plan",
		},
	];

	return (
		<PageShell>
			<div className="w page-hero">
				<p className="page-badge">
					<span className="bdot" />
					{ru ? "О проекте" : "About the project"}
				</p>
				<h1 className="page-h1">{ru ? "NCAi: система вместо стратегии" : "NCAi: a system, not a strategy"}</h1>
				<p className="page-sub">
					{ru
						? "NCAi — это Илья Новицкий: предприниматель, который проектирует воронки и сам пишет код, который их обслуживает. Основное — вход в бизнес на месяц: показываю результат на вашей задаче бесплатно, дальше работаю внутри проекта. Рядом — распаковка агентства, обучение AI один на один и бесплатная книга."
						: "NCAi is Ilya Novitsky: an entrepreneur who designs sales funnels and writes the code that runs them. The core offer is a month inside your business: I show a result on your task for free, then work inside the project. Alongside it — agency unboxing, 1-on-1 AI training and a free book."}
				</p>
			</div>

			{/* Цифры */}
			<section className="alt" style={{ padding: "3rem 0" }}>
				<div className="w">
					<div className="hstats" style={{ animation: "none", opacity: 1, transform: "none" }}>
						<div className="hstat">
							<div className="hstatn">300+</div>
							<div className="hstatl">{ru ? "Проектов" : "Projects"}</div>
						</div>
						<div className="hstat">
							<div className="hstatn">50M ₽</div>
							<div className="hstatl">{ru ? "В запусках" : "In launches"}</div>
						</div>
						<div className="hstat">
							<div className="hstatn">100K+</div>
							<div className="hstatl">{ru ? "Заявок обработано" : "Leads handled"}</div>
						</div>
						<div className="hstat">
							<div className="hstatn">1</div>
							<div className="hstatl">{ru ? "Книга" : "Book"}</div>
						</div>
					</div>
				</div>
			</section>

			{/* Направления */}
			<div className="w" style={{ paddingTop: "4rem" }}>
				<h2 className="legal-h2" style={{ borderTop: "none", paddingTop: 0 }}>
					{ru ? "Три направления" : "Three directions"}
				</h2>
				<div className="about-blocks">
					{blocks.map((b, i) => (
						<div key={i} className="about-block">
							<div className="about-block-icon">{b.icon}</div>
							<h3 className="about-block-title">{b.title}</h3>
							<p className="about-block-text">{b.text}</p>
						</div>
					))}
				</div>

				<h2 className="legal-h2">{ru ? "Куда идём" : "Where this is going"}</h2>
				<p className="about-block-text" style={{ maxWidth: 680 }}>
					{ru
						? "Семь лет практики до платформы и месяц реальной разработки внутри неё. Даты старта ниже взяты из записей системы, а не написаны задним числом."
						: "Seven years of practice before the platform and a month of real development inside it. The start dates below come from the system's own records, not written after the fact."}
				</p>
				<ol className="vz-road">
					{road.map((r, i) => (
						<li key={i} className={r.state === "done" ? "is-done" : r.state === "now" ? "is-now" : ""}>
							<div className="vz-road-when">{r.when}</div>
							<div className="vz-road-what">{r.what}</div>
							<div className="vz-road-x">{r.text}</div>
							{r.proof && <span className="vz-road-proof">{r.proof}</span>}
						</li>
					))}
				</ol>
				<div className="vz-road-legend">
					<span>
						<i className="d" />
						{ru ? "сделано" : "done"}
					</span>
					<span>
						<i className="n" />
						{ru ? "идёт сейчас" : "in progress"}
					</span>
					<span>
						<i />
						{ru ? "план, а не обещание" : "planned, not promised"}
					</span>
				</div>

				<h2 className="legal-h2">{ru ? "Почему это работает" : "Why it works"}</h2>
				<p className="legal-p">
					{ru
						? "Ключевое отличие — я не разделяю «стратегию» и «исполнение». Воронка придумана здесь же, где написана. Баг, отказ рынка или неудачный тест — это не проблема, а датасет для следующей итерации системы. Такой подход исключает ситуацию, когда маркетолог продаёт то, что разработчик не может собрать."
						: "The key difference: I don't separate 'strategy' from 'execution'. The funnel is designed in the same place it is coded. A bug, a failed test or market rejection is not a problem — it is a dataset for the next iteration. This approach eliminates the gap between what marketing sells and what developers can build."}
				</p>

				<h2 className="legal-h2">{ru ? "Продукты" : "Products"}</h2>
				<ul className="legal-list">
					<li className="legal-li">
						<strong>{ru ? "Книги:" : "Books:"}</strong>{" "}
						<a href="/book" style={{ color: "var(--a)" }}>
							«Нейро-Воронка»
						</a>{" "}
						— {ru ? "бесплатно, читается прямо на сайте." : "free, read right on the site."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Распаковка:" : "Unboxing:"}</strong>{" "}
						<a href="/raspakovka" style={{ color: "var(--a)" }}>
							NCAi-агентство за 4 шага
						</a>{" "}
						— {ru ? "система продаж и AI-команда в панели." : "a sales system and AI team in a dashboard."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Обучение:" : "Training:"}</strong>{" "}
						<a href="/ai-training" style={{ color: "var(--a)" }}>
							AI 1 на 1 за месяц
						</a>{" "}
						— {ru ? "собираете свой продукт руками." : "you build your own product by hand."}
					</li>
				</ul>

				<h2 className="legal-h2">{ru ? "Связь" : "Contact"}</h2>
				<p className="legal-p">
					{ru ? "По всем вопросам — " : "For any questions — "}
					<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" style={{ color: "var(--a)" }}>
						Telegram
					</a>{" "}
					{ru ? "или" : "or"}{" "}
					<a href="mailto:ilya.novitskii@yandex.ru" style={{ color: "var(--a)" }}>
						ilya.novitskii@yandex.ru
					</a>
					.
				</p>
			</div>
		</PageShell>
	);
}
