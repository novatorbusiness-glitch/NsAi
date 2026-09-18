"use client";

import { CASES_HTML, CASES_HTML_EN } from "@/lib/ai-training-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function CasesSection() {
	return <Bilingual ru={CASES_HTML} en={CASES_HTML_EN} />;
}
