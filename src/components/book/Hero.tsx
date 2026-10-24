import { site } from "@/config/site";
import { book } from "@content/pages/book";
import { common } from "@content/pages/common";
import { chapters } from "@/lib/book";

// Первый экран книги: о чём книга, «Читать бесплатно» и «Купить на Литрес», обложка.
export default function Hero() {
	const c = book.hero;
	return (
		<section className="hero bookhero">
			<div className="wrap bookgrid">
				<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{c.crumb}</p>
					<h1>{c.h1}</h1>
					<p className="lead">{c.lead}</p>
					<p className="sub">{c.sub}</p>
					<div className="cta-row"><a className="btn p" href={`/book/${chapters()[0].slug}`}>{c.read}</a><a className="btn s" href={site.litres} target="_blank" rel="noopener" data-goal="book_litres">{c.litres}</a></div>
				</div>
				<img className="bookcover" src={c.cover.src} alt={c.cover.alt} width={600} height={900} />
			</div>
		</section>
	);
}
