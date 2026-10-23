import type { Metadata } from "next";
import { sreda } from "@content/pages/sreda";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/sreda.css";
import Hero from "@/components/sreda/Hero";
import Team from "@/components/sreda/Team";
import Stacks from "@/components/sreda/Stacks";
import Gets from "@/components/sreda/Gets";
import Tasks from "@/components/sreda/Tasks";
import Prices from "@/components/sreda/Prices";
import Faq from "@/components/sreda/Faq";
import Start from "@/components/sreda/Start";

export const metadata: Metadata = pageMeta(sreda.meta, "/svoya-ai-sreda", "svoya-ai-sreda");

// Своя AI-среда v2 (23.10): консультация 90 минут и PDF. Команда → связка → что получите → задачи → цены → вопросы → запись.
// В меню «Консультация по AI». Блоки — components/sreda.
export default function Page() {
	return (
		<>
			<Hero />
			<Team />
			<Stacks />
			<Gets />
			<Tasks />
			<Prices />
			<Faq />
			<Start />
			<JsonLd data={[crumbs([{ name: sreda.hero.crumb, path: "/svoya-ai-sreda" }])]} />
		</>
	);
}
