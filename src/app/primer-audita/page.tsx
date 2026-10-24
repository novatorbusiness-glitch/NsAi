import type { Metadata } from "next";
import { razbor } from "@content/pages/razbor";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/razbor.css";
import Hero from "@/components/razbor/Hero";
import Doc from "@/components/razbor/Doc";
import How from "@/components/razbor/How";
import Gets from "@/components/razbor/Gets";
import Price from "@/components/razbor/Price";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = pageMeta(razbor.meta, "/primer-audita", "primer-audita");

// Пример аудита v2 (23.10): обещание и итог в рублях → как ищу потери → пример целиком → что остаётся у вас → цена → разбор задачи.
export default function Page() {
	const h = razbor.hero;
	return (
		<>
			<Hero />
			<How />
			<Doc />
			<Gets />
			<Price />
			<Contact h2={razbor.contactH2} />
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-audita" }])]} />
		</>
	);
}
