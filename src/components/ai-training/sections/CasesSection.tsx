"use client";

import { CASES_HTML } from "@/lib/ai-training-sections";

export default function CasesSection() {
	return <div dangerouslySetInnerHTML={{ __html: CASES_HTML }} />;
}
