"use client";

import { QUESTIONS_HTML, QUESTIONS_HTML_EN } from "@/lib/ai-training-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function QuestionsSection() {
	return <Bilingual ru={QUESTIONS_HTML} en={QUESTIONS_HTML_EN} />;
}
