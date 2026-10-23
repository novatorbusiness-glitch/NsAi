import type { Metadata } from "next";
import Hero from "@/components/process/Hero";
import Scope from "@/components/process/Scope";
import Rhythm from "@/components/process/Rhythm";
import Terms from "@/components/process/Terms";
import Services from "@/components/process/Services";
import Contact from "@/components/home/Contact";
import { process } from "@content/pages/kak-my-rabotaem";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";
import "@/styles/pages/process.css";

export const metadata: Metadata = pageMeta(process.meta, "/kak-my-rabotaem", "kak-my-rabotaem");

export default function Page() {
	return (
		<>
			<Hero />
			<Scope />
			<Rhythm />
			<Terms />
			<Services />
			<Contact num={process.contactNum} />
			<JsonLd data={crumbs([{ name: process.hero.crumb, path: "/kak-my-rabotaem" }])} />
		</>
	);
}
