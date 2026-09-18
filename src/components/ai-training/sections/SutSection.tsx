"use client";

import { SUT_HTML, SUT_HTML_EN } from "@/lib/ai-training-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function SutSection() {
	return <Bilingual ru={SUT_HTML} en={SUT_HTML_EN} />;
}
