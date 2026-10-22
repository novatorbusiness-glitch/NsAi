import type { ReactNode } from "react";
import { render } from "@/lib/book";

// Текст главы в одну колонку для чтения: «В этой главе» раскрывается над текстом, дальше текст с рисунками, под ним — переход дальше.
export default function Chapter({ slug, body, title, tocLabel, children }: { slug: string; body: string; title: string; tocLabel: string; children: ReactNode }) {
	const { html, toc } = render(body, title, slug);
	return (
		<>
			{toc.length > 0 && <details className="bk-toc"><summary>{tocLabel} <span>{toc.length}</span></summary><ol>{toc.map((x) => <li key={x.id}><a href={`#${x.id}`}>{x.title}</a></li>)}</ol></details>}
			<div className="prose bk-text">
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{children}
			</div>
		</>
	);
}
