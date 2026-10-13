import type { Metadata } from "next";
import { book } from "@content/pages/book";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs, bookLd } from "@/lib/seo";
import Hero from "@/components/book/Hero";
import Toc from "@/components/book/Toc";

export const metadata: Metadata = pageMeta(book.meta, "/book", "book");

export default function Page() {
	return (
		<>
			<Hero />
			<Toc />
			<JsonLd data={[crumbs([{ name: book.hero.crumb, path: "/book" }]), bookLd(book.hero.h1, book.meta.description, [book.toc.start, ...book.toc.parts, book.toc.end].reduce((n, p) => n + p.chapters.length, 0))]} />
		</>
	);
}
