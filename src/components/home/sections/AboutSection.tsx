"use client";

import { ABOUT_HTML, ABOUT_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function AboutSection() {
	return <Bilingual ru={ABOUT_HTML} en={ABOUT_HTML_EN} />;
}
