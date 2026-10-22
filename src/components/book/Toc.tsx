import { book } from "@content/pages/book";
import { chapters, parts, label, type Chapter } from "@/lib/book";

const List = ({ items }: { items: Chapter[] }) => <ol>{items.map((c) => <li key={c.slug}><a href={`/book/${c.slug}`}>{label(c)}</a></li>)}</ol>;

// Оглавление: начало, шесть этапов, эпилог — из книги v2.
export default function Toc() {
	const c = book.toc;
	const all = chapters();
	return (
		<section id="toc" className="alt booktoc">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="bpart bintro"><h3>{c.start}</h3><List items={all.slice(0, 1)} /></div>
				<div className="bparts">{parts().map((p) => <div className="bpart" key={p.num}><p className="bpn">{c.part} {String(p.num).padStart(2, "0")}</p><h3>{p.title}</h3><List items={p.chapters} /></div>)}</div>
				<div className="bpart bintro"><h3>{c.end}</h3><List items={all.slice(-1)} /></div>
			</div>
		</section>
	);
}
