import type { Metadata } from "next";
import { razbor } from "@content/pages/razbor";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/razbor.css";
import Hero from "@/components/razbor/Hero";
import Doc from "@/components/razbor/Doc";
import Vs from "@/components/razbor/Vs";
import You from "@/components/razbor/You";
import Start from "@/components/razbor/Start";

export const metadata: Metadata = pageMeta(razbor.meta, "/primer-audita", "primer-audita");

// Пример аудита (16.10, переименован 22.10): первый экран с воронкой → аудит целиком документом → чем отличается от разбора по анкете → ваш бизнес → начать.
export default function Page() {
	const h = razbor.hero;
	return (
		<>
			<Hero />
			<Doc />
			<Vs />
			<You />
			<Start />
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-audita" }])]} />
		</>
	);
}
