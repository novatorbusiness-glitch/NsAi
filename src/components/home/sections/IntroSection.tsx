"use client";

import { INTRO_HTML, INTRO_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function IntroSection() {
	return <Bilingual ru={INTRO_HTML} en={INTRO_HTML_EN} />;
}
