import type { Metadata } from "next";
import Hero from "@/components/process/Hero";
import ServiceStep from "@/components/process/ServiceStep";
import MentorCta from "@/components/process/MentorCta";
import Scope from "@/components/process/Scope";
import { process } from "@content/pages/kak-my-rabotaem";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";

export const metadata: Metadata = pageMeta(process.meta, "/kak-my-rabotaem", "kak-my-rabotaem");

export default function Page() {
	return (
		<>
			<Hero />
			{process.steps.map((s, i) => <ServiceStep key={s.id} s={s} n={i + 1} />)}
			<Scope />
			<MentorCta />
			<JsonLd data={crumbs([{ name: process.hero.crumb, path: "/kak-my-rabotaem" }])} />
		</>
	);
}
