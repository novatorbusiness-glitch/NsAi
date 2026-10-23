import ContactNote from "@/components/ui/ContactNote";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/blog/ArticleCard";
import TagFilter from "@/components/blog/TagFilter";
import { allPosts } from "@/lib/blog";
import { site } from "@/config/site";
import { blog } from "@content/pages/blog";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import { common } from "@content/pages/common";
import "@/styles/pages/blog.css";

export const metadata: Metadata = pageMeta(blog.meta, "/blog", "blog");

export default function BlogPage() {
	const posts = allPosts();
	const [first, ...rest] = posts;
	const tags = Array.from(new Set(posts.map((p) => p.tag)));
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
				<div className="wrap" id="posts">
					<TagFilter tags={tags} all={blog.allTopics} />
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
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.telegram}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
						<p className="under">{f.under}</p>
						<ContactNote />
					</div>
				</div>
			</section>
			<JsonLd data={crumbs([{ name: h.crumb, path: "/blog" }])} />
		</>
	);
}
