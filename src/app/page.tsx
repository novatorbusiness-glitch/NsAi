import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Situations from "@/components/home/Situations";
import Benefits from "@/components/home/Benefits";
import Compare from "@/components/home/Compare";
import Process from "@/components/home/Process";
import Speed from "@/components/home/Speed";
import AiFit from "@/components/home/AiFit";
import Done from "@/components/home/Done";
import About from "@/components/home/About";
import Fit from "@/components/home/Fit";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import { home } from "@content/pages/home";
import { faq } from "@content/pages/faq";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, servicesLd, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(home.meta, "/", "home", { absolute: true });

export default function Page() {
	return (
		<>
			<Hero />
			<Situations />
			<Benefits />
			<Compare />
			<Process />
			<Speed />
			<AiFit />
			<Done />
			<About />
			<Fit />
			<Faq />
			<Contact />
			<JsonLd data={[servicesLd(), faqLd(faq)]} />
		</>
	);
}
