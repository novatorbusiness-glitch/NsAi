import Link from "next/link";
import { legal } from "@/lib/legal";
import { common } from "@content/pages/common";

// Страница документа: оферта, политика, согласие. Тексты — content/legal/*.md.
export default function LegalPage({ slug }: { slug: string }) {
	const { title, html } = legal(slug);
	const c = common.legal;
	return (
		<section className="hero">
			<div className="wrap doc">
				<p className="crumbs"><Link href="/">{common.ui.home}</Link><span>/</span>{c.crumb}</p>
				<h1>{title}</h1>
				<div className="doclinks">
					{c.docs.filter((d) => d.slug !== slug).map((d) => <Link key={d.slug} href={`/${d.slug}`}>{d.title}</Link>)}
				</div>
				<p className="dnote">{c.edition}</p>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</section>
	);
}
