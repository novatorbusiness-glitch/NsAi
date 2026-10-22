import type { Metadata } from "next";
import { primer } from "@content/pages/primer";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/primer.css";
import Hero from "@/components/primer/Hero";
import Why from "@/components/primer/Why";
import ProjectMap from "@/components/primer/ProjectMap";
import Read from "@/components/primer/Read";
import Demo from "@/components/primer/Demo";
import Vedenie from "@/components/primer/Vedenie";
import You from "@/components/primer/You";
import Start from "@/components/primer/Start";

export const metadata: Metadata = pageMeta(primer.meta, "/primer-chertezha", "primer-chertezha");

// Пример чертежа (решение 16.10): зачем карта (боль и рынок) → карта (чертёж) → как читать → прототип → ведение по карте → ваш проект в три шага → начать.
export default function Page() {
	const h = primer.hero;
	return (
		<>
			<Hero />
			<Why />
			<ProjectMap />
			<Read />
			<Demo />
			<Vedenie />
			<You />
			<Start />
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-chertezha" }])]} />
		</>
	);
}
