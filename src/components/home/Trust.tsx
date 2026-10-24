import { site } from "@/config/site";
import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import ChannelLine from "@/components/ui/ChannelLine";

// 04 · опыт: три цифры агентства с оговоркой, два отзыва, коротко кто я, карточка книги и канал. id «trust» — цель «дочитал до кейсов».
export default function Trust() {
	const c = home.trust;
	return (
		<section id="trust" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="facts tnums">{c.nums.map((n) => <div key={n.num}><b>{n.num}</b><span>{n.text}</span></div>)}</div>
				<p className="cap">{c.note}</p>
				<div className="quotes2">
					<p className="lbl">{c.quotesLabel}</p>
					<div>{c.quotes.map((q) => <figure key={q.who}><blockquote>«{q.text}»</blockquote><figcaption>{q.who}</figcaption></figure>)}</div>
				</div>
				<div className="me-mini">
					<img src={c.photo.src} alt={c.photo.alt} width={88} height={88} loading="lazy" />
					<p><Rich t={c.about} /></p>
					<a className="btn s" href="/keisy">{c.all}</a>
				</div>
				<div className="bookcard">
					<img src={c.book.cover} alt={c.book.alt} width={120} height={180} loading="lazy" />
					<div>
						<p className="lbl">{c.book.label} <span className="bbadge">{c.book.badge}</span></p>
						<h3>{c.book.title}</h3>
						<p>{c.book.text}</p>
						<div className="cta-row"><a className="btn s" href="/book">{c.book.read}</a><a className="more-link" href={site.litres} target="_blank" rel="noopener" data-goal="book_litres">{c.book.litres}</a></div>
						<ChannelLine short />
					</div>
				</div>
			</div>
		</section>
	);
}
