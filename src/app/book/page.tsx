import type { Metadata } from "next";
import { book } from "@content/pages/book";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs, bookLd } from "@/lib/seo";
import Hero from "@/components/book/Hero";
import Toc from "@/components/book/Toc";
import { chapters } from "@/lib/book";

export const metadata: Metadata = pageMeta(book.meta, "/book", "book");

export default function Page() {
	return (
		<>
			<Hero />
			<Toc />
			<JsonLd data={[crumbs([{ name: book.hero.crumb, path: "/book" }]), bookLd(book.hero.h1, book.meta.description, chapters().length)]} />
		</>
	);
}
