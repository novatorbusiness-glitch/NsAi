import type { Metadata } from "next";
import Hero from "@/components/cases/Hero";
import Path from "@/components/cases/Path";
import Cases from "@/components/cases/Cases";
import Products from "@/components/cases/Products";
import Bridge from "@/components/cases/Bridge";
import Quotes from "@/components/cases/Quotes";
import Contact from "@/components/home/Contact";
import { keisy } from "@content/pages/keisy";
import JsonLd from "@/components/ui/JsonLd";
import { allCases } from "@/lib/cases";
import { pageMeta, crumbs, casesLd } from "@/lib/seo";
import "@/styles/pages/keisy.css";

export const metadata: Metadata = pageMeta(keisy.meta, "/keisy", "keisy");

// Кейсы v2 (23.10): путь → кейсы агентства по направлениям → свои продукты → связка с услугами → отзывы → разбор задачи.
export default function Page() {
	return (
		<>
			<Hero />
			<Path />
			<Cases />
			<Products />
			<Bridge />
			<Quotes />
			<Contact h2={keisy.contactH2} />
			<JsonLd data={[crumbs([{ name: keisy.hero.crumb, path: "/keisy" }]), casesLd(allCases())]} />
		</>
	);
}
