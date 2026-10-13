import { book } from "@content/pages/book";

type Ch = { slug: string; title: string };
const List = ({ items }: { items: readonly Ch[] }) => <ol>{items.map((c) => <li key={c.slug}><a href={`/book/${c.slug}`}>{c.title}</a></li>)}</ol>;

// Оглавление: начало, шесть этапов, эпилог.
export default function Toc() {
	const c = book.toc;
	return (
		<section id="toc" className="alt booktoc">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="bpart bintro"><h3>{c.start.title}</h3><List items={c.start.chapters} /></div>
				<div className="bparts">{c.parts.map((p) => <div className="bpart" key={p.num}><p className="bpn">{p.num}</p><h3>{p.title}</h3><List items={p.chapters} /></div>)}</div>
				<div className="bpart bintro"><h3>{c.end.title}</h3><List items={c.end.chapters} /></div>
			</div>
		</section>
	);
}
