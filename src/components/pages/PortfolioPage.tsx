"use client";

import { useEffect } from "react";
import PageShell from "@/components/layout/PageShell";
import { portfolioJs } from "@/lib/portfolio-js";
import HeroSection from "@/components/portfolio/sections/HeroSection";
import WorkSection from "@/components/portfolio/sections/WorkSection";
import ClientsSection from "@/components/portfolio/sections/ClientsSection";
import HireSection from "@/components/portfolio/sections/HireSection";
import ContactSection from "@/components/portfolio/sections/ContactSection";

/**
 * Страница /portfolio — «Tech Product Partner»: найм и партнёрство.
 * Разобрана на секции по паттерну RaspakovkaPage — использует общий
 * PageShell (Navigation/Footer), свой интерактив (курсор, reveal)
 * подключается через useEffect, как на /raspakovka и /ai-training.
 */
export default function PortfolioPage() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const w = window as unknown as { __ncaiPortfolioInited?: boolean };
		if (w.__ncaiPortfolioInited) return;
		w.__ncaiPortfolioInited = true;
		document.documentElement.classList.add("js");
		if (!("IntersectionObserver" in window)) {
			document.querySelectorAll(".rv").forEach((el) => el.classList.add("on"));
		}
		try {
			new Function(portfolioJs)();
		} catch (err) {
			console.error("NCAi portfolio page script error:", err);
		}
	}, []);

	return (
		<PageShell>
			<div id="cd" />
			<div id="cr" />
			<HeroSection />
			<WorkSection />
			<ClientsSection />
			<HireSection />
			<ContactSection />
		</PageShell>
	);
}
