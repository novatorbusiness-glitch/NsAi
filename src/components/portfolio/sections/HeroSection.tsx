"use client";

import { HERO_HTML, HERO_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function HeroSection() {
	return <Bilingual ru={HERO_HTML} en={HERO_HTML_EN} />;
}
