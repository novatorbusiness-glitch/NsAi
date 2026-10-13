import type { Metadata } from "next";
import Redirect from "@/components/layout/Redirect";
import { common } from "@content/pages/common";
import { redirects } from "@/config/redirects";

// Старые адреса вне блога. Статьи блога — в blog/[slug].
export const dynamicParams = false;
const own = Object.keys(redirects).filter((p) => !p.startsWith("/blog/"));

export function generateStaticParams() {
	return own.map((p) => ({ from: p.slice(1).split("/") }));
}

export function generateMetadata({ params }: { params: { from: string[] } }): Metadata {
	return { title: common.redirect.title, alternates: { canonical: redirects[`/${params.from.join("/")}`] }, robots: { index: false } };
}

export default function Page({ params }: { params: { from: string[] } }) {
	return <Redirect to={redirects[`/${params.from.join("/")}`]} />;
}
