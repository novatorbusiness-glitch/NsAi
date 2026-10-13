import type { Metadata } from "next";
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

export const metadata: Metadata = {
	title: "Наставничество: продукт на AI своими руками",
	description: "Наставничество один на один: соберёте приложение, сайт или сервис на AI сами, по шагам и без опыта программирования. 80 000 ₽ в месяц, около двух месяцев.",
	alternates: { canonical: "/nastavnichestvo" },
};

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
