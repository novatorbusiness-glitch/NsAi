"use client";

import { FINAL_HTML, FINAL_HTML_EN } from "@/lib/ai-training-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function FinalSection() {
	return <Bilingual ru={FINAL_HTML} en={FINAL_HTML_EN} />;
}
