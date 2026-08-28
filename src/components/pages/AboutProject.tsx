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

	return (
		<PageShell>
			<div className="w page-hero">
				<p className="lb">{ru ? "О проекте" : "About the project"}</p>
				<h1 className="page-h1">{ru ? "Проект NCAi" : "The NCAi project"}</h1>
				<p className="page-sub">
					{ru
						? "NCAi — это Илья Новицкий: предприниматель, который проектирует воронки и сам пишет код, который их обслуживает. Проект объединяет три продукта: внедрение AI-систем, обучение AI 1 на 1 и книги по нейромаркетингу."
						: "NCAi is Ilya Novitsky: an entrepreneur who designs sales funnels and writes the code that runs them. The project brings together three products: AI implementation, 1-on-1 AI training and books on neuromarketing."}
				</p>
			</div>

			{/* Цифры */}
			<section className="alt" style={{ padding: "3rem 0" }}>
				<div className="w">
					<div className="hstats" style={{ animation: "none", opacity: 1, transform: "none" }}>
						<div className="hstat">
							<div className="hstatn">
								300+<span className="sfx">+</span>
							</div>
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
							<div className="hstatn">2</div>
							<div className="hstatl">{ru ? "Книги" : "Books"}</div>
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
						{ru ? "и" : "and"}{" "}
						<a href="/agency-in-a-box" style={{ color: "var(--a)" }}>
							«Агентство в коробке»
						</a>{" "}
						— {ru ? "бесплатно, читаются прямо на сайте." : "free, read right on the site."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Внедрение:" : "Implementation:"}</strong>{" "}
						<a href="/consulting" style={{ color: "var(--a)" }}>
							NCAi-агентство за 30 дней
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
