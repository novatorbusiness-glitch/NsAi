import { BOOK_CHAPTER_LINKS, BOOK_INTRO_LINK } from "@/lib/book-data";

export default function Footer() {
	return (
		<footer>
			<div className="fwm">NcAi</div>
			<div className="w footer-inner">
				<div className="fgrid">
					<div>
						<div className="flogo">NcAi</div>
						<p className="ftag">
							Архитектор систем. Нейромаркетинг, AI-автоматизация и системное мышление для тех,
							кто строит бизнес серьезно.
						</p>
						<div className="fsoc">
							<a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" className="fsi" aria-label="Telegram">
								✈
							</a>
						</div>
					</div>

					<div>
						<div className="fch">Книга</div>
						<ul className="fls">
							<li>
								<a href={`/book/${BOOK_INTRO_LINK.slug}`}>{BOOK_INTRO_LINK.title}</a>
							</li>
							{BOOK_CHAPTER_LINKS.map((chapter) => (
								<li key={chapter.id}>
									<a href={`/book/${chapter.entrySlug}`}>
										{`Гл. ${chapter.id} - ${chapter.title}`}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="fch">Работа</div>
						<ul className="fls">
							<li>
								<a href="#offer">Консалтинг</a>
							</li>
							<li>
								<a href="#cases">Кейсы</a>
							</li>
							<li>
								<a href="#mechanism">Метод</a>
							</li>
							<li>
								<a href="/book">Книга бесплатно</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="fbot">
					<span className="fcp">© 2025 NcAi. Все права защищены.</span>
					<span className="fea">
						Сделано через лайф-кодинг - <span>как обещано</span>
					</span>
				</div>
			</div>
		</footer>
	);
}
