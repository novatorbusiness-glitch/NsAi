import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/blog/ArticleCard";
import StepPicker from "@/components/home/StepPicker";
import { allPosts, dateRu, getPost, render } from "@/lib/blog";
import { ctas, type Cta } from "@/config/blog";
import { site } from "@/config/site";
import { redirects } from "@/config/redirects";
import Redirect from "@/components/layout/Redirect";

// Старые статьи, которых больше нет, ведут на /blog.
const moved = (slug: string) => redirects[`/blog/${slug}`];
export const dynamicParams = false;

export function generateStaticParams() {
	const old = Object.keys(redirects).filter((p) => p.startsWith("/blog/")).map((p) => ({ slug: p.slice(6) }));
	return [...allPosts().map((p) => ({ slug: p.slug })), ...old];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
	if (moved(params.slug)) return { title: "Страница переехала", alternates: { canonical: moved(params.slug) }, robots: { index: false } };
	const r = getPost(params.slug);
	if (!r) return {};
	return {
		title: r.post.title,
		description: r.post.description,
		alternates: { canonical: `/blog/${r.post.slug}` },
		openGraph: { type: "article", title: r.post.title, description: r.post.description, modifiedTime: r.post.updated, url: `/blog/${r.post.slug}`, images: [site.og] },
	};
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
	if (moved(params.slug)) return <Redirect to={moved(params.slug)} />;
	const r = getPost(params.slug);
	if (!r) notFound();
	const { post: a, related } = r;
	const { parts, toc } = render(a.body);
	const c = ctas[a.cta as Cta];
	const ld = { "@context": "https://schema.org", "@type": "Article", headline: a.h1, description: a.description, dateModified: a.updated, author: { "@type": "Person", name: site.name, url: site.url }, mainEntityOfPage: `${site.url}/blog/${a.slug}` };
	return (
		<div className="article">
			<div className="wrap">
				<p className="crumbs"><Link href="/">Главная</Link><span>/</span><Link href="/blog">Блог</Link><span>/</span>{a.cover}</p>
				<div className="ahead">
					<span className="tagc">{a.tag}</span>
					<h1>{a.h1}</h1>
					<div className="byline"><img src="/images/site/ilya-main.jpg" alt={site.name} width={40} height={40} /><div><b>{site.name}</b><span>обновлено {dateRu(a.updated)} · {a.mins} мин чтения</span></div></div>
				</div>
				<div className="alayout">
					<aside className="toc"><p className="lbl">В статье</p><ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.title}</a></li>)}</ol></aside>
					<div className="prose">
						{parts.map((p, i) => (typeof p === "string" ? <div key={i} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: p }} /> : <StepPicker key={i} id="pick-a" />))}
						<div className="acta">
							<div><h3>{c.title}</h3><p>{c.text}</p></div>
							<div>
								{c.href.startsWith("/") ? <Link className="btn p" href={c.href}>{c.button}</Link> : <a className="btn p" href={c.href} target="_blank" rel="noopener">{c.button}</a>}
								<p className="under">{c.under}</p>
							</div>
						</div>
						<div className="author"><img src="/images/site/ilya-main.jpg" alt={site.name} width={72} height={72} /><div><b>{site.name}</b><p>Помогаю бизнесу с маркетингом, продуктом и автоматизацией на уровне директора по маркетингу, без найма в штат. Пять лет строил системы продаж для клиентов, а с апреля 2026 года собрал четыре своих продукта.</p><Link href="/">Подробнее обо мне →</Link> <a className="tga" href={site.contacts.channel} target="_blank" rel="noopener">Канал в Telegram →</a></div></div>
					</div>
				</div>
			</div>
			<section className="alt related">
				<div className="wrap">
					<h2>Читать дальше</h2>
					<div className="agrid three">{related.map((p) => <ArticleCard key={p.slug} p={p} />)}</div>
				</div>
			</section>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
		</div>
	);
}
