"use client";

import { QUESTIONS_HTML } from "@/lib/ai-training-sections";

export default function QuestionsSection() {
	return <div dangerouslySetInnerHTML={{ __html: QUESTIONS_HTML }} />;
}
