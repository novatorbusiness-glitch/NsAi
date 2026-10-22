import type { Metadata } from "next";
import { mentor } from "@content/pages/nastavnichestvo";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs, mentorLd, faqLd } from "@/lib/seo";
import Hero from "@/components/mentor/Hero";
import Fit from "@/components/mentor/Fit";
import Program from "@/components/mentor/Program";
import Result from "@/components/mentor/Result";
import Included from "@/components/mentor/Included";
import Price from "@/components/mentor/Price";
import Savings from "@/components/mentor/Savings";
import Difference from "@/components/mentor/Difference";
import Mentor from "@/components/mentor/Mentor";
import Faq from "@/components/mentor/Faq";
import Contact from "@/components/mentor/Contact";
import "@/styles/pages/mentor.css";

export const metadata: Metadata = pageMeta(mentor.meta, "/nastavnichestvo", "nastavnichestvo");

export default function Page() {
	return (
		<>
			<Hero />
			<Fit />
			<Program />
			<Result />
			<Included />
			<Price />
			<Savings />
			<Difference />
			<Mentor />
			<Faq />
			<Contact />
			<JsonLd data={[crumbs([{ name: "Наставничество", path: "/nastavnichestvo" }]), mentorLd(), faqLd(mentor.faq.items)]} />
		</>
	);
}
