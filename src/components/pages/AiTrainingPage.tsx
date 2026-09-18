"use client";

import { useEffect } from "react";
import PageShell from "@/components/layout/PageShell";
import { aiTrainingJs } from "@/lib/ai-training-js";
import HeroSection from "@/components/ai-training/sections/HeroSection";
import IdeaSection from "@/components/ai-training/sections/IdeaSection";
import SutSection from "@/components/ai-training/sections/SutSection";
import MechanismSection from "@/components/ai-training/sections/MechanismSection";
import ProgramSection from "@/components/ai-training/sections/ProgramSection";
import QuestionsSection from "@/components/ai-training/sections/QuestionsSection";
import ObjectionsSection from "@/components/ai-training/sections/ObjectionsSection";
import OfferSection from "@/components/ai-training/sections/OfferSection";
import AmpSection from "@/components/ai-training/sections/AmpSection";
import CasesSection from "@/components/ai-training/sections/CasesSection";
import FinalSection from "@/components/ai-training/sections/FinalSection";

/**
 * Страница «Обучение AI»: оффер 1 на 1, 1 месяц, 70–80к ₽.
 * Разобрана на секции по паттерну RaspakovkaPage — использует общий
 * PageShell (Navigation/Footer), свой интерактив (курсор, reveal, canvas-
 * частицы в hero) подключается через useEffect, как на /raspakovka.
 */
export default function AiTrainingPage() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const w = window as unknown as { __ncaiTrainingInited?: boolean };
		if (w.__ncaiTrainingInited) return;
		w.__ncaiTrainingInited = true;
		document.documentElement.classList.add("js");
		if (!("IntersectionObserver" in window)) {
			document.querySelectorAll(".rv").forEach((el) => el.classList.add("on"));
		}
		try {
			new Function(aiTrainingJs)();
		} catch (err) {
			console.error("NCAi ai-training page script error:", err);
		}
	}, []);

	return (
		<PageShell>
			<div id="cd" />
			<div id="cr" />
			<HeroSection />
			<IdeaSection />
			<SutSection />
			<MechanismSection />
			<ProgramSection />
			<QuestionsSection />
			<ObjectionsSection />
			<OfferSection />
			<AmpSection />
			<CasesSection />
			<FinalSection />
		</PageShell>
	);
}
