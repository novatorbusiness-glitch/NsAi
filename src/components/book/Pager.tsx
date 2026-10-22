import Link from "next/link";
import { book } from "@content/pages/book";
import { label, type Chapter } from "@/lib/book";

// «Назад / дальше» между главами книги.
export default function Pager({ prev, next }: { prev: Chapter | null; next: Chapter | null }) {
	const t = book.reader;
	return (
		<nav className="pnav" aria-label={t.all}>
			{prev ? <Link className="pn prev" href={`/book/${prev.slug}`}><span>← {t.prev}</span><b>{label(prev)}</b></Link> : <span />}
			{next ? <Link className="pn next" href={`/book/${next.slug}`}><span>{t.next} →</span><b>{label(next)}</b></Link> : <span />}
		</nav>
	);
}
