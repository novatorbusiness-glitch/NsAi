import type { CSSProperties } from "react";
import PageShell from "@/components/layout/PageShell";
import { BOOK_CHAPTER_SUBS } from "@/lib/book-data";

const COVER = "/covers/neuro-voronka-cover.jpg";
const AUTHOR_TG = "https://t.me/ilya_novator";

// Цвет, иконка и «крючок» каждой главы — чтобы карточки не были на одно лицо.
const CHAPTER_META: Record<number, { color: string; icon: string; hook: string }> = {
	1: { color: "#FFD000", icon: "🧠", hook: "Как говорить с мозгом, а не с кошельком" },
	2: { color: "#4ECDC4", icon: "⚙️", hook: "Воронка, которая работает без тебя" },
	3: { color: "#B4A7D6", icon: "🤝", hook: "Прогрев незнакомца до покупки без давления" },
	4: { color: "#FF6B6B", icon: "📡", hook: "Поток нужных людей без хаотичного бюджета" },
	5: { color: "#ff9d2e", icon: "🤖", hook: "Убери себя из операционки" },
	6: { color: "#6ECFF6", icon: "🧬", hook: "AI-агенты с правом решений" },
};

// Презентация книги «Нейро-Воронка» (эталон структуры exnihilo.life/kniga):
// обложка → мета → крупный заголовок → теглайн → описание → автор → CTA →
// вступительный абзац → список 6 глав карточками с «Читать →».
export default function BookCatalog() {
	return (
		<PageShell>
			<div className="bkcat">
				<header className="bkcat-hero">
					<div className="bkcat-cover">
						<img
							src={COVER}
							alt="Обложка книги «Нейро-Воронка»"
							width={1000}
							height={1500}
							loading="eager"
						/>
					</div>

					<div className="bkcat-hero-body">
						<p className="bkcat-meta">Книга · бесплатный подарок · 2026</p>
						<h1 className="bkcat-title">НЕЙРО-ВОРОНКА</h1>
						<p className="bkcat-tagline">Инженерия систем продаж на стыке нейробиологии и AI</p>
						<p className="bkcat-desc">
							Практическое руководство Ильи Новицкого: как перехватывать внимание, проектировать
							предсказуемые воронки и автоматизировать продажи — на чистой инженерии и
							нейробиологии, без дешёвых манипуляций. 6 глав, 30 подглав.
						</p>
						<div className="bkcat-author">
							Автор — <strong>Илья Новицкий</strong>
						</div>
						<div className="bkcat-cta">
							<a className="bkcat-btn bkcat-btn-tg" href={AUTHOR_TG} target="_blank" rel="noopener noreferrer">
								Связаться с автором
							</a>
							<a className="bkcat-btn bkcat-btn-read" href="/book/read">
								Читать книгу
							</a>
						</div>
					</div>
				</header>

				<section className="bkcat-intro">
					<p>
						Эта книга написана для предпринимателей, маркетологов и экспертов, которые устали
						строить бизнес на фундаменте из надежды. Для тех, кто хочет выйти из хаоса ручной
						операционки и спроектировать предсказуемую, автономную систему — такой механизм
						работает без выгорания и возвращает контроль над временем.
					</p>
					<p>
						Мы разберём, как перехватывать внимание аудитории, как формировать стабильный поток
						заявок с математической точностью и без надрыва. <strong>Здесь нет дешёвых манипуляций
						— только чистая инженерия</strong>, опирающаяся на фундаментальную нейробиологию и
						реальные механизмы работы человеческого мозга.
					</p>
				</section>

				<section className="bkcat-chapters">
					<p className="bkcat-chapters-label">Содержание</p>
					<h2 className="bkcat-chapters-title">Шесть глав — от внимания до автономного контура</h2>
					<div className="bkcat-grid">
						{BOOK_CHAPTER_SUBS.map((chapter) => (
							<a
								key={chapter.id}
								className="bkcat-card"
								style={{ "--cc": CHAPTER_META[chapter.id].color } as CSSProperties}
								href={`/book/read#${chapter.subs[0].slug}`}
							>
								<span className="bkcat-card-icon" aria-hidden="true">{CHAPTER_META[chapter.id].icon}</span>
								<span className="bkcat-card-num">Глава {chapter.id} · {chapter.title}</span>
								<h3 className="bkcat-card-title">«{CHAPTER_META[chapter.id].hook}»</h3>
								<p className="bkcat-card-desc">{chapter.subs.length} подглав, начиная с «{chapter.subs[0].title}»</p>
								<span className="bkcat-card-cta">Читать →</span>
							</a>
						))}
					</div>
				</section>
			</div>
		</PageShell>
	);
}
