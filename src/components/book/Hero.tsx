// Перенесено из прототипа 13.10.2026.
export default function Hero() {
	return (
		<>
			<section className="hero bookhero">
			<div className="wrap bookgrid">
			<div>
			<p className="crumbs"><a href="/">Главная</a><span>/</span>Книга</p>
			<h1>Книга «Нейро-воронка»</h1>
			<p className="lead">Практическое руководство по системам продаж на стыке нейробиологии, поведенческой психологии и AI. Шесть этапов: от того, как клиент замечает вас в ленте, до продаж, которые идут без вас.</p>
			<p className="sub">Книга собрана на опыте агентства: больше 300 проектов, онлайн-школы, клиники, эксперты и IT-компании. Читается бесплатно, прямо на сайте.</p>
			<div className="cta-row"><a className="btn p" href="/book/00-a-znakomstvo">Читать бесплатно</a><a className="btn s" href="#toc">Оглавление</a></div>
			</div>
			<img className="bookcover" src="/images/site/book-cover.jpg" alt="Обложка книги «Нейро-воронка»" width={600} height={900} />
			</div>
			</section>
		</>
	);
}
