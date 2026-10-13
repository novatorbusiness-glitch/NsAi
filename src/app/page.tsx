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

export const metadata: Metadata = {
	title: { absolute: "Один человек вместо отдела маркетинга и пяти подрядчиков · Илья Новицкий" },
	description: "Маркетинг, продукт и автоматизация на уровне директора по маркетингу, без найма в штат: сайт, контент, продукт и аналитика у одного специалиста. Первый шаг за 3–4 дня.",
	alternates: { canonical: "/" },
};

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
		</>
	);
}
