import type { Metadata } from "next";
import { mentor } from "@content/pages/nastavnichestvo";
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

export const metadata: Metadata = { ...mentor.meta, alternates: { canonical: "/nastavnichestvo" } };

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
		</>
	);
}
