import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Niches from "@/components/home/Niches";
import Team from "@/components/home/Team";
import Proof from "@/components/home/Proof";
import Save from "@/components/home/Save";
import Work from "@/components/home/Work";
import Me from "@/components/home/Me";
import Trust from "@/components/home/Trust";
import Extra from "@/components/home/Extra";
import Express from "@/components/home/Express";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import { home } from "@content/pages/home";
import { faq } from "@content/pages/faq";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, servicesLd, faqLd } from "@/lib/seo";
import "@/styles/pages/home.css";

export const metadata: Metadata = pageMeta(home.meta, "/", "home", { absolute: true });

export default function Page() {
	return (
		<>
			<Hero />
			<Niches />
			<Team />
			<Proof />
			<Save />
			<Work />
			<Me />
			<Trust />
			<Extra />
			<Express />
			<Faq />
			<Contact />
			<JsonLd data={[servicesLd(), faqLd(faq)]} />
		</>
	);
}
