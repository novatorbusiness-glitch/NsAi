"use client";

import { CTA_HTML, CTA_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function CtaSection() {
	return <Bilingual ru={CTA_HTML} en={CTA_HTML_EN} />;
}
