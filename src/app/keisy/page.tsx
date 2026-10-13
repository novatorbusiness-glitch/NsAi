import type { Metadata } from "next";
import Hero from "@/components/cases/Hero";
import Products from "@/components/cases/Products";
import System from "@/components/cases/System";
import Sales from "@/components/cases/Sales";
import Contact from "@/components/cases/Contact";
import { keisy } from "@content/pages/keisy";

export const metadata: Metadata = { ...keisy.meta, alternates: { canonical: "/keisy" } };

export default function Page() {
	return (
		<>
			<Hero />
			<Products />
			<System />
			<Sales />
			<Contact />
		</>
	);
}
