"use client";

import { useEffect } from "react";
import PageShell from "@/components/layout/PageShell";
import { consultingJs } from "@/lib/consulting-js";
import ConsultingHero from "@/components/consulting/sections/ConsultingHero";
import IdeaSection from "@/components/consulting/sections/IdeaSection";
import UnderTheHoodSection from "@/components/consulting/sections/UnderTheHoodSection";
import ScreensSection from "@/components/consulting/sections/ScreensSection";
import GetsSection from "@/components/consulting/sections/GetsSection";
import WhoSection from "@/components/consulting/sections/WhoSection";
import BoxSection from "@/components/consulting/sections/BoxSection";
import VsAiSection from "@/components/consulting/sections/VsAiSection";
import StepsSection from "@/components/consulting/sections/StepsSection";
import RoiSection from "@/components/consulting/sections/RoiSection";
import RealWorkSection from "@/components/consulting/sections/RealWorkSection";
import FeaturesSection from "@/components/consulting/sections/FeaturesSection";
import QuestionsSection from "@/components/consulting/sections/QuestionsSection";
import ObjectionsSection from "@/components/consulting/sections/ObjectionsSection";
import OfferSection from "@/components/consulting/sections/OfferSection";
import AmpSection from "@/components/consulting/sections/AmpSection";
import CasesSection from "@/components/consulting/sections/CasesSection";
import CtaSection from "@/components/consulting/sections/CtaSection";

/**
 * Распаковка — единственный оффер: автоматическая распаковка в боте за 19 900 ₽,
 * разворачивающая рабочее агентство целиком, плюс подписка. Структура страницы
 * (Илья 15.09): hero → боли → движок → скрины → возможности → для кого → CTA,
 * дальше — поддерживающие блоки (суть, отличие от чат-ботов, процесс, ROI, ниши,
 * фичи, вопросы, возражения, оффер, усилители, кейсы). Движок — реальные механики
 * из БД (spec-mechanisms-catalog), скрины — живые снимки системы, «для кого» — две
 * равные ветки: владелец бизнеса + новая профессия «менеджер AI-агентства».
 */
export default function RaspakovkaPage() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const w = window as unknown as { __ncaiConsultingInited?: boolean };
		if (w.__ncaiConsultingInited) return;
		w.__ncaiConsultingInited = true;
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
			<UnderTheHoodSection />
			<ScreensSection />
			<GetsSection />
			<WhoSection />
			<BoxSection />
			<VsAiSection />
			<StepsSection />
			<RoiSection />
			<RealWorkSection />
			<FeaturesSection />
			<QuestionsSection />
			<ObjectionsSection />
			<OfferSection />
			<AmpSection />
			<CasesSection />
			<CtaSection />
		</PageShell>
	);
}
