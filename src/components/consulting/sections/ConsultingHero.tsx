"use client";

import { HERO_HTML, HERO_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ConsultingHero() {
	return <Bilingual ru={HERO_HTML} en={HERO_HTML_EN} />;
}
