"use client";

import { PRINCIPLES_HTML, PRINCIPLES_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function PrinciplesSection() {
	return <Bilingual ru={PRINCIPLES_HTML} en={PRINCIPLES_HTML_EN} />;
}
