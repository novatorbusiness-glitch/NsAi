import type { Metadata } from "next";
import Hero from "@/components/process/Hero";
import ServiceStep from "@/components/process/ServiceStep";
import MentorCta from "@/components/process/MentorCta";
import { process } from "@content/pages/kak-my-rabotaem";

export const metadata: Metadata = { ...process.meta, alternates: { canonical: "/kak-my-rabotaem" } };

export default function Page() {
	return (
		<>
			<Hero />
			{process.steps.map((s, i) => <ServiceStep key={s.id} s={s} n={i + 1} />)}
			<MentorCta />
		</>
	);
}
