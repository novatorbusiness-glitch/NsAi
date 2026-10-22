import type { Metadata } from "next";
import Redirect from "@/components/layout/Redirect";
import { redirects } from "@/config/redirects";
import { redirectMeta } from "@/lib/seo";

// Старые адреса вне блога и книги. Статьи блога — в blog/[slug], главы — в book/[slug].
export const dynamicParams = false;
const own = Object.keys(redirects).filter((p) => !p.startsWith("/blog/") && !p.startsWith("/book/"));

export function generateStaticParams() {
	return own.map((p) => ({ from: p.slice(1).split("/") }));
}

export function generateMetadata({ params }: { params: { from: string[] } }): Metadata {
	const from = `/${params.from.join("/")}`;
	return redirectMeta(from, redirects[from]);
}

export default function Page({ params }: { params: { from: string[] } }) {
	return <Redirect to={redirects[`/${params.from.join("/")}`]} />;
}
