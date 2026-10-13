import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/blog/ArticleCard";
import { allPosts } from "@/lib/blog";
import { site } from "@/config/site";
import { blog } from "@content/pages/blog";
import { common } from "@content/pages/common";

export const metadata: Metadata = { ...blog.meta, alternates: { canonical: "/blog" } };

export default function BlogPage() {
	const [first, ...rest] = allPosts();
	const h = blog.hero;
	const f = blog.final;
	return (
		<>
			<section className="hero bloghero">
				<div className="wrap">
					<p className="crumbs"><Link href="/">{common.ui.home}</Link><span>/</span>{h.crumb}</p>
					<h1>{h.h1}</h1>
					<p className="lead">{h.lead}</p>
					<p className="tgline">{h.channel} <a href={site.contacts.channel} target="_blank" rel="noopener">{site.contacts.channelHandle}</a></p>
				</div>
			</section>
			<section className="alt blogs">
				<div className="wrap">
					<ArticleCard p={first} big />
					<div className="agrid">
						{rest.map((p) => <ArticleCard key={p.slug} p={p} />)}
					</div>
				</div>
			</section>
			<section className="final">
				<div className="wrap">
					<div className="card">
						<h2>{f.h2}</h2>
						<p className="lead">{f.lead}</p>
						<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.telegram}</a>{" "}
						<a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a>
						<p className="under">{site.contacts.telegramHandle} · {f.under}</p>
					</div>
				</div>
			</section>
		</>
	);
}
