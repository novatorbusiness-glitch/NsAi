import type { Metadata } from "next";
import Hero from "@/components/process/Hero";
import TestDrive from "@/components/process/TestDrive";
import Blueprint from "@/components/process/Blueprint";
import Management from "@/components/process/Management";
import MentorCta from "@/components/process/MentorCta";

export const metadata: Metadata = {
	title: "Как мы работаем: тест-драйв, чертёж, ведение",
	description: "Три шага работы: аудит одной задачи за 3–4 дня, чертёж системы с прототипом за 2–3 недели и ведение. Что получите, как проходит, цена и чего не будет.",
	alternates: { canonical: "/kak-my-rabotaem" },
};

export default function Page() {
	return (
		<>
			<Hero />
			<TestDrive />
			<Blueprint />
			<Management />
			<MentorCta />
		</>
	);
}
