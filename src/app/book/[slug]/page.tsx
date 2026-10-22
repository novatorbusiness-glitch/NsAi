import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { book } from "@content/pages/book";
import { common } from "@content/pages/common";
import { chapters, getChapter, label, seoTitle, describe, readMins } from "@/lib/book";
import { redirects } from "@/config/redirects";
import { pageMeta, crumbs, redirectMeta } from "@/lib/seo";
import { site } from "@/config/site";
import JsonLd from "@/components/ui/JsonLd";
import Redirect from "@/components/layout/Redirect";
import Chapter from "@/components/book/Chapter";
import Pager from "@/components/book/Pager";
import "@/styles/pages/book.css";

// Глава книги: читалка в стиле сайта, одна страница = одна подглава v2. Старые адреса глав — переадресация.
const moved = (slug: string) => redirects[`/book/${slug}`];
export const dynamicParams = false;

export function generateStaticParams() {
	const old = Object.keys(redirects).filter((p) => p.startsWith("/book/")).map((p) => ({ slug: p.slice(6) }));
	return [...chapters().map((c) => ({ slug: c.slug })), ...old];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
	if (moved(params.slug)) return redirectMeta(`/book/${params.slug}`, moved(params.slug));
	const r = getChapter(params.slug);
	if (!r) return {};
	return pageMeta({ title: seoTitle(r.chapter), description: describe(r.body) }, `/book/${r.chapter.slug}`, `book-${r.chapter.slug}`, { type: "article" });
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
	if (moved(params.slug)) return <Redirect to={moved(params.slug)} />;
	const r = getChapter(params.slug);
	if (!r) notFound();
	const { chapter: c, body, index, total, prev, next } = r;
	const t = book.reader;
	const mark = c.num ? `${t.chap} ${c.num}` : index === 0 ? t.start : t.end;
	return (
		<div className="article bk">
			<div className="wrap">
				<p className="crumbs"><Link href="/">{common.ui.home}</Link><span>/</span><Link href="/book">{book.hero.crumb}</Link><span>/</span><span className="nav-chap">{mark}</span></p>
				<div className="ahead">
					<span className="tagc">{c.part ? `${t.part} ${c.part}` : book.hero.h1}</span>
					<h1>{c.title}</h1>
					<p className="bk-meta">{t.of(index + 1, total)} · {readMins(body)} {t.mins}</p>
				</div>
				<Chapter slug={c.slug} body={body} title={c.title} tocLabel={t.toc}>
					<Pager prev={prev} next={next} />
					<p className="pall"><Link href="/book#toc">{t.all} →</Link></p>
					<div className="author"><img src="/images/site/ilya-main.jpg" alt={site.name} width={72} height={72} /><div><b>{site.name}</b><p>{t.author}</p><Link href="/">{t.about}</Link></div></div>
				</Chapter>
			</div>
			<JsonLd data={[crumbs([{ name: book.hero.crumb, path: "/book" }, { name: label(c), path: `/book/${c.slug}` }])]} />
		</div>
	);
}
