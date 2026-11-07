import { book } from "@content/pages/book";
import { chapters, parts, label, type Chapter } from "@/lib/book";

// Строка оглавления: код главы зелёной mono-меткой, название белым, ховер — подсветка.
const Row = ({ c }: { c: Chapter }) => {
	const txt = label(c);
	const m = txt.match(/^(\d+\.\d+)\s+(.*)$/);
	return (
		<li key={c.slug} className={m ? "" : "noc"}>
			<a href={`/book/${c.slug}`}>
				{m ? <><span className="cc">{m[1]}</span>{m[2]}</> : txt}
			</a>
		</li>
	);
};

const List = ({ items }: { items: Chapter[] }) => <ul className="tlistb">{items.map((c) => <Row c={c} key={c.slug} />)}</ul>;

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
