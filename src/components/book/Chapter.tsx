import type { ReactNode } from "react";
import { render } from "@/lib/book";

// Текст главы: оглавление разделов сбоку (на телефоне — раскрывается), текст с рисунками и подписями, под ним — переход дальше.
export default function Chapter({ slug, body, title, tocLabel, children }: { slug: string; body: string; title: string; tocLabel: string; children: ReactNode }) {
	const { html, toc } = render(body, title, slug);
	const list = toc.map((x) => <li key={x.id}><a href={`#${x.id}`}>{x.title}</a></li>);
	return (
		<div className="alayout">
			<aside className="toc">{toc.length > 0 && <><details className="tocd"><summary className="lbl">{tocLabel}</summary><ol>{list}</ol></details><p className="lbl tocl">{tocLabel}</p><ol className="tocl">{list}</ol></>}</aside>
			<div className="prose bk-text">
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{children}
			</div>
		</div>
	);
}
