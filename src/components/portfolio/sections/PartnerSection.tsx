"use client";

import { PARTNER_HTML, PARTNER_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function PartnerSection() {
	return <Bilingual ru={PARTNER_HTML} en={PARTNER_HTML_EN} />;
}
