"use client";

import { PROGRAM_HTML, PROGRAM_HTML_EN } from "@/lib/ai-training-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ProgramSection() {
	return <Bilingual ru={PROGRAM_HTML} en={PROGRAM_HTML_EN} />;
}
