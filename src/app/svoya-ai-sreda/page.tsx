import type { Metadata } from "next";
import { sreda } from "@content/pages/sreda";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/sreda.css";
import Hero from "@/components/sreda/Hero";
import Situation from "@/components/sreda/Situation";
import Gets from "@/components/sreda/Gets";
import How from "@/components/sreda/How";
import More from "@/components/sreda/More";
import Fit from "@/components/sreda/Fit";
import Start from "@/components/sreda/Start";

export const metadata: Metadata = pageMeta(sreda.meta, "/svoya-ai-sreda", "svoya-ai-sreda");

// Своя AI-среда (16.10): консультация как вход. Ситуация → что получите → как проходит → больше → кому → начать.
// Отдельный продукт, не смешиваем с аудитом, чертежом и ведением: в меню «AI-консультация» (22.10), на главной не стоит. Блоки — components/sreda.
export default function Page() {
	const h = sreda.hero;
	return (
		<>
			<Hero />
			<Situation />
			<Gets />
			<How />
			<More />
			<Fit />
			<Start />
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/svoya-ai-sreda" }])]} />
		</>
	);
}
