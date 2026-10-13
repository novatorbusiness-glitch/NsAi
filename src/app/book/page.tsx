import type { Metadata } from "next";
import { book } from "@content/pages/book";
import Hero from "@/components/book/Hero";
import Toc from "@/components/book/Toc";

export const metadata: Metadata = { ...book.meta, alternates: { canonical: "/book" } };

export default function Page() {
	return (
		<>
			<Hero />
			<Toc />
		</>
	);
}
