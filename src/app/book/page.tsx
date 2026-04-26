import { BOOK_CHAPTER_LINKS, BOOK_INTRO_LINKS } from "@/lib/book-data";

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
				<div className="book-index-start-label">С чего начать</div>
				<div className="book-index-intro-links">
					{BOOK_INTRO_LINKS.map((intro) => (
						<a key={intro.slug} href={`/book/${intro.slug}`} className="book-index-intro-link">
							<span className="book-index-intro-title">{intro.title}</span>
							<span className="book-index-intro-desc">{intro.description}</span>
						</a>
					))}
				</div>
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
