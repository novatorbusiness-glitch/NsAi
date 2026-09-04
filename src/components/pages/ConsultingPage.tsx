"use client";

import { useEffect } from "react";
import PageShell from "@/components/layout/PageShell";
import { consultingJs } from "@/lib/consulting-js";
import ConsultingHero from "@/components/consulting/sections/ConsultingHero";
import IdeaSection from "@/components/consulting/sections/IdeaSection";
import BoxSection from "@/components/consulting/sections/BoxSection";
import RoiSection from "@/components/consulting/sections/RoiSection";
import GetsSection from "@/components/consulting/sections/GetsSection";
import UnpackSection from "@/components/consulting/sections/UnpackSection";
import StepsSection from "@/components/consulting/sections/StepsSection";
import QuestionsSection from "@/components/consulting/sections/QuestionsSection";
import ObjectionsSection from "@/components/consulting/sections/ObjectionsSection";
import OfferSection from "@/components/consulting/sections/OfferSection";
import AmpSection from "@/components/consulting/sections/AmpSection";
import CasesSection from "@/components/consulting/sections/CasesSection";
import CtaSection from "@/components/consulting/sections/CtaSection";

/**
 * Внедрение NCAi — собранная из изолированных секций по ТЗ NCAI_SPEC.
 * Общая шапка/подвал — PageShell (Navigation + Footer).
 */
export default function ConsultingPage() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const w = window as unknown as { __ncaiConsultingInited?: boolean };
		if (w.__ncaiConsultingInited) return;
		w.__ncaiConsultingInited = true;
		// Reveal — прогрессивно (без JS контент виден)
		document.documentElement.classList.add("js");
		if (!("IntersectionObserver" in window)) {
			document.querySelectorAll(".rv").forEach((el) => el.classList.add("on"));
		} else {
			const ro = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }), { threshold: 0.07 });
			document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
		}
		try { new Function(consultingJs)(); } catch (err) { console.error("consulting script error:", err); }
	}, []);

	return (
		<PageShell>
			<div id="cd" /><div id="cr" />
			<ConsultingHero />
			<IdeaSection />
			<BoxSection />
			<RoiSection />
			<GetsSection />
			<UnpackSection />
			<StepsSection />
			<QuestionsSection />
			<ObjectionsSection />
			<OfferSection />
			<AmpSection />
			<CasesSection />
			<CtaSection />
		</PageShell>
	);
}
