"use client";

import { FAQ_HTML, FAQ_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function FaqSection() {
	return <Bilingual ru={FAQ_HTML} en={FAQ_HTML_EN} />;
}
