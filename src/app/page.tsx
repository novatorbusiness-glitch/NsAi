import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Metamorph from "@/components/home/Metamorph";
import Numbers from "@/components/home/Numbers";
import Changes from "@/components/home/Changes";
import CtaBanner from "@/components/home/CtaBanner";
import Team from "@/components/home/Team";
import Position from "@/components/home/Position";
import Work from "@/components/home/Work";
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
			<Numbers />
			<Metamorph />
			<Team />
			<CtaBanner />
			<Changes />
			<Position />
			<Work />
			<Trust />
			<Extra />
			<Express />
			<Faq />
			<Contact />
			<JsonLd data={[servicesLd(), faqLd(faq)]} />
		</>
	);
}
