"use client";

import { SUT_HTML } from "@/lib/ai-training-sections";

export default function SutSection() {
	return <div dangerouslySetInnerHTML={{ __html: SUT_HTML }} />;
}
