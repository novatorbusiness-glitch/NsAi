import Link from "next/link";
import { legal } from "@/lib/legal";

const DOCS = [
	{ slug: "offer", title: "Публичная оферта на оказание услуг" },
	{ slug: "privacy", title: "Политика обработки персональных данных" },
	{ slug: "consent", title: "Согласие на обработку персональных данных" },
];
export const LEGAL_EDITION = "Редакция от 13.10.2026.";

// Страница документа: оферта, политика, согласие.
export default function LegalPage({ slug }: { slug: string }) {
	const { title, html } = legal(slug);
	return (
		<section className="hero">
			<div className="wrap doc">
				<p className="crumbs"><Link href="/">Главная</Link><span>/</span>Документы</p>
				<h1>{title}</h1>
				<div className="doclinks">
					{DOCS.filter((d) => d.slug !== slug).map((d) => <Link key={d.slug} href={`/${d.slug}`}>{d.title}</Link>)}
				</div>
				<p className="dnote">{LEGAL_EDITION}</p>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</section>
	);
}
