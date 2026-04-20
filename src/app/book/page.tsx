import { BOOK_CHAPTER_LINKS, BOOK_INTRO_LINK } from "@/lib/book-data";

export default function BookPage() {
	return (
		<main className="w book-index-page">
			<h1 className="book-index-title">НЕЙРО-ВОРОНКА</h1>
			<p className="book-index-subtitle">
				Практическое руководство по инженерии систем продаж на стыке нейробиологии, поведенческой психологии и AI.
			</p>
			<p className="book-index-author">
				Автор: Илья Новицкий
			</p>

			<div className="book-index-start">
				<div className="book-index-start-label">
					Рекомендуемый старт
				</div>
				<a href={`/book/${BOOK_INTRO_LINK.slug}`} className="book-index-start-link">
					{BOOK_INTRO_LINK.title}
				</a>
			</div>

			<ul className="book-index-list">
				{BOOK_CHAPTER_LINKS.map((chapter) => (
					<li key={chapter.id} className="book-index-item">
						<a href={`/book/${chapter.entrySlug}`} className="book-index-link">{`Глава ${chapter.id}: ${chapter.title}`}</a>
					</li>
				))}
			</ul>
		</main>
	);
}
