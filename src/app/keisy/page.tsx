import type { Metadata } from "next";
import Hero from "@/components/cases/Hero";
import Products from "@/components/cases/Products";
import System from "@/components/cases/System";
import Sales from "@/components/cases/Sales";
import Mistakes from "@/components/cases/Mistakes";
import Contact from "@/components/cases/Contact";
import { keisy } from "@content/pages/keisy";
import JsonLd from "@/components/ui/JsonLd";
import { allCases } from "@/lib/cases";
import { pageMeta, crumbs, casesLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(keisy.meta, "/keisy", "keisy");

export default function Page() {
	return (
		<>
			<Hero />
			<Sales />
			<Mistakes />
			<Products />
			<System />
			<Contact />
			<JsonLd data={[crumbs([{ name: "Кейсы", path: "/keisy" }]), casesLd(allCases())]} />
		</>
	);
}
