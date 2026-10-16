import ContactNote from "@/components/ui/ContactNote";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/blog/ArticleCard";
import ArticleBody from "@/components/blog/ArticleBody";
import { allPosts, dateRu, getPost, render } from "@/lib/blog";
import type { Cta } from "@/config/blog";
import { blog } from "@content/pages/blog";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs, articleLd, redirectMeta } from "@/lib/seo";
import { site } from "@/config/site";
import { redirects } from "@/config/redirects";
import Redirect from "@/components/layout/Redirect";
import { common } from "@content/pages/common";

// Старые статьи, которых больше нет, ведут на /blog.
const moved = (slug: string) => redirects[`/blog/${slug}`];
export const dynamicParams = false;

export function generateStaticParams() {
	const old = Object.keys(redirects).filter((p) => p.startsWith("/blog/")).map((p) => ({ slug: p.slice(6) }));
	return [...allPosts().map((p) => ({ slug: p.slug })), ...old];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
	if (moved(params.slug)) return redirectMeta(`/blog/${params.slug}`, moved(params.slug));
	const r = getPost(params.slug);
	if (!r) return {};
	return pageMeta({ title: r.post.title, description: r.post.description }, `/blog/${r.post.slug}`, `blog-${r.post.slug}`, { type: "article", modified: r.post.updated });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
	if (moved(params.slug)) return <Redirect to={moved(params.slug)} />;
	const r = getPost(params.slug);
	if (!r) notFound();
	const { post: a, related, prev, next } = r;
	const { toc } = render(a.body);
	const c = blog.ctas[a.cta as Cta];
	const t = blog.article;
	return (
		<div className="article">
			<div className="wrap">
				<p className="crumbs"><Link href="/">{common.ui.home}</Link><span>/</span><Link href="/blog">{common.ui.blog}</Link><span>/</span>{a.cover}</p>
				<div className="ahead">
					<span className="tagc">{a.tag}</span>
					<h1>{a.h1}</h1>
					<div className="byline"><img src="/images/site/ilya-main.jpg" alt={site.name} width={40} height={40} /><div><b>{site.name}</b><span>{t.updated} {dateRu(a.updated)} · {a.mins} {t.mins}</span></div></div>
				</div>
				<div className="alayout">
					<aside className="toc"><details className="tocd"><summary className="lbl">{t.toc}</summary><ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.title}</a></li>)}</ol></details><p className="lbl tocl">{t.toc}</p><ol className="tocl">{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.title}</a></li>)}</ol></aside>
					<div className="prose">
						<ArticleBody body={a.body} />
						<div className="acta">
							<div><h3>{c.title}</h3><p>{c.text}</p></div>
							<div className="acta-act">
								<div className="cta-row">{c.href.startsWith("/") ? <Link className="btn p" href={c.href}>{c.button}</Link> : <a className="btn p" href={c.href} target="_blank" rel="noopener">{c.button}</a>}<a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
								<p className="under">{c.under}</p>
								<ContactNote />
							</div>
						</div>
						<nav className="pnav" aria-label={t.all}>
							{prev ? <Link className="pn prev" href={`/blog/${prev.slug}`}><span>← {t.prev}</span><b>{prev.cover}</b></Link> : <span />}
							{next ? <Link className="pn next" href={`/blog/${next.slug}`}><span>{t.next} →</span><b>{next.cover}</b></Link> : <span />}
						</nav>
						<p className="pall"><Link href="/blog">{t.all} →</Link></p>
						<div className="author"><img src="/images/site/ilya-main.jpg" alt={site.name} width={72} height={72} /><div><b>{site.name}</b><p>{t.author}</p><Link href="/">{t.about}</Link> <a className="tga" href={site.contacts.channel} target="_blank" rel="noopener">{t.channel}</a></div></div>
					</div>
				</div>
			</div>
			<section className="alt related">
				<div className="wrap">
					<h2>{t.related}</h2>
					<div className="agrid three">{related.map((p) => <ArticleCard key={p.slug} p={p} />)}</div>
				</div>
			</section>
			<JsonLd data={[articleLd(a), crumbs([{ name: common.ui.blog, path: "/blog" }, { name: a.cover, path: `/blog/${a.slug}` }])]} />
		</div>
	);
}
