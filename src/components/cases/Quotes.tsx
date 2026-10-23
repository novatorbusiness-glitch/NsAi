import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 05 · отзывы клиентов агентства одним блоком, без имён.
export default function Quotes() {
	const c = keisy.quotes;
	return (
		<section className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="quotes2"><div>{c.items.map((q) => <figure key={q.who}><blockquote>«{q.text}»</blockquote><figcaption>{q.who}</figcaption></figure>)}</div></div>
			</div>
		</section>
	);
}
