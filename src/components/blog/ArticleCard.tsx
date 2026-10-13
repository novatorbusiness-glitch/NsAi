import Link from "next/link";
import type { Post } from "@/lib/blog";
import { dateRu } from "@/lib/blog";

// Карточка статьи: в списке блога и в «Читать дальше».
export default function ArticleCard({ p, big = false }: { p: Post; big?: boolean }) {
	return (
		<Link className={big ? "acard big" : "acard"} href={`/blog/${p.slug}`}>
			<div className={`acover ${p.coverClass}`}>
				<span className="at">{p.tag}</span>
				<b>{p.cover}</b>
			</div>
			<div className="abody">
				<h3>{big ? p.h1 : p.title}</h3>
				<p>{p.description}</p>
				<div className="ameta">{p.mins} мин чтения · {dateRu(p.updated)}</div>
			</div>
		</Link>
	);
}
