"use client";

import { FINAL_HTML } from "@/lib/ai-training-sections";

export default function FinalSection() {
	return <div dangerouslySetInnerHTML={{ __html: FINAL_HTML }} />;
}
