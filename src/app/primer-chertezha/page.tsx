import type { Metadata } from "next";
import { primer } from "@content/pages/primer";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/primer.css";
import Hero from "@/components/primer/Hero";
import Why from "@/components/primer/Why";
import ProjectMap from "@/components/primer/ProjectMap";
import Parts from "@/components/primer/Parts";
import Demo from "@/components/primer/Demo";
import How from "@/components/primer/How";
import Price from "@/components/primer/Price";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = pageMeta(primer.meta, "/primer-chertezha", "primer-chertezha");

// Пример чертежа v2 (24.10): что такое чертёж → зачем план → семь частей → карта своего ИИ-сервиса → макет → как проходит → цена и развилка → разбор задачи.
export default function Page() {
	const h = primer.hero;
	return (
		<>
			<Hero />
			<Why />
			<Parts />
			<ProjectMap />
			<Demo />
			<How />
			<Price />
			<Contact h2={primer.contactH2} />
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-chertezha" }])]} />
		</>
	);
}
