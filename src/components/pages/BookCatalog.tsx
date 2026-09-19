"use client";

import type { CSSProperties } from "react";
import PageShell from "@/components/layout/PageShell";
import { BOOK_CHAPTER_SUBS } from "@/lib/book-data";
import { useLang } from "@/lib/i18n";

const COVER = "/covers/neuro-voronka-cover.jpg";
const AUTHOR_TG = "https://t.me/ilya_novator";

// Цвет, иконка и «крючок» каждой главы — чтобы карточки не были на одно лицо.
const CHAPTER_META: Record<number, { color: string; icon: string; hook: string; hookEn: string }> = {
	1: { color: "#FFD000", icon: "🧠", hook: "Как говорить с мозгом, а не с кошельком", hookEn: "How to talk to the brain, not the wallet" },
	2: { color: "#4ECDC4", icon: "⚙️", hook: "Воронка, которая работает без тебя", hookEn: "A funnel that works without you" },
	3: { color: "#B4A7D6", icon: "🤝", hook: "Прогрев незнакомца до покупки без давления", hookEn: "Warming a stranger to a purchase, no pressure" },
	4: { color: "#FF6B6B", icon: "📡", hook: "Поток нужных людей без хаотичного бюджета", hookEn: "A steady flow of the right people, no chaotic spend" },
	5: { color: "#ff9d2e", icon: "🤖", hook: "Убери себя из операционки", hookEn: "Take yourself out of the day-to-day" },
	6: { color: "#6ECFF6", icon: "🧬", hook: "AI-агенты с правом решений", hookEn: "AI agents with the right to decide" },
};

// Презентация книги «Нейро-Воронка» (эталон структуры exnihilo.life/kniga):
// обложка → мета → крупный заголовок → теглайн → описание → автор → CTA →
// вступительный абзац → список 6 глав карточками с «Читать →».
export default function BookCatalog() {
	const { lang } = useLang();
	const ru = lang === "ru";

	return (
		<PageShell>
			<div className="bkcat">
				<header className="bkcat-hero">
					<div className="bkcat-cover">
						<img
							src={COVER}
							alt={ru ? "Обложка книги «Нейро-Воронка»" : '"Neuro-Funnel" book cover'}
							width={1000}
							height={1500}
							loading="eager"
						/>
					</div>

					<div className="bkcat-hero-body">
						<p className="bkcat-meta">{ru ? "Книга · бесплатный подарок · 2026" : "Book · free gift · 2026"}</p>
						<h1 className="bkcat-title">{ru ? "НЕЙРО-ВОРОНКА" : "NEURO-FUNNEL"}</h1>
						<p className="bkcat-tagline">
							{ru ? "Инженерия систем продаж на стыке нейробиологии и AI" : "Engineering sales systems at the intersection of neuroscience and AI"}
						</p>
						<p className="bkcat-desc">
							{ru
								? "Практическое руководство Ильи Новицкого: как перехватывать внимание, проектировать предсказуемые воронки и автоматизировать продажи — на чистой инженерии и нейробиологии, без дешёвых манипуляций. 6 глав, 30 подглав."
								: "A practical guide by Ilya Novitsky: how to capture attention, design predictable funnels, and automate sales — on pure engineering and neuroscience, no cheap manipulation. 6 chapters, 30 subchapters."}
						</p>
						<div className="bkcat-author">
							{ru ? "Автор" : "Author"} — <strong>{ru ? "Илья Новицкий" : "Ilya Novitsky"}</strong>
						</div>
						<div className="bkcat-cta">
							<a className="bkcat-btn bkcat-btn-tg" href={AUTHOR_TG} target="_blank" rel="noopener noreferrer">
								{ru ? "Связаться с автором" : "Contact the author"}
							</a>
							<a className="bkcat-btn bkcat-btn-read" href="/book/read">
								{ru ? "Читать книгу" : "Read the book"}
							</a>
						</div>
					</div>
				</header>

				<section className="bkcat-intro">
					{ru ? (
						<>
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
						</>
					) : (
						<>
							<p>
								This book is written for entrepreneurs, marketers and experts who are tired of
								building a business on a foundation of hope. For those who want to escape the chaos
								of manual day-to-day work and design a predictable, autonomous system — a mechanism
								that runs without burnout and gives you back control of your time.
							</p>
							<p>
								We break down how to capture audience attention and build a steady stream of leads
								with mathematical precision and no strain. <strong>There's no cheap manipulation here
								— only clean engineering</strong>, grounded in real neuroscience and the actual
								mechanics of how the human brain works.
							</p>
						</>
					)}
				</section>

				<section className="bkcat-chapters">
					<p className="bkcat-chapters-label">{ru ? "Содержание" : "Contents"}</p>
					<h2 className="bkcat-chapters-title">
						{ru
							? "6 глав, 30 подглав — от захвата внимания до воронки, которая работает сама"
							: "6 chapters, 30 subchapters — from capturing attention to a funnel that runs itself"}
					</h2>
					<div className="bkcat-grid">
						{BOOK_CHAPTER_SUBS.map((chapter) => (
							<a
								key={chapter.id}
								className="bkcat-card"
								style={{ "--cc": CHAPTER_META[chapter.id].color } as CSSProperties}
								href={`/book/read#${chapter.subs[0].slug}`}
							>
								<span className="bkcat-card-icon" aria-hidden="true">{CHAPTER_META[chapter.id].icon}</span>
								<span className="bkcat-card-num">{ru ? "Глава" : "Chapter"} {chapter.id} · {chapter.title}</span>
								<h3 className="bkcat-card-title">«{ru ? CHAPTER_META[chapter.id].hook : CHAPTER_META[chapter.id].hookEn}»</h3>
								<p className="bkcat-card-desc">
									{ru
										? `${chapter.subs.length} подглав, начиная с «${chapter.subs[0].title}»`
										: `${chapter.subs.length} subchapters, starting with "${chapter.subs[0].title}"`}
								</p>
								<span className="bkcat-card-cta">{ru ? "Читать →" : "Read →"}</span>
							</a>
						))}
					</div>
				</section>
			</div>
		</PageShell>
	);
}
