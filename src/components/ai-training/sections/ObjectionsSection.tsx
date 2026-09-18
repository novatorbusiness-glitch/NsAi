"use client";

import { OBJECTIONS_HTML } from "@/lib/ai-training-sections";

export default function ObjectionsSection() {
	return <div dangerouslySetInnerHTML={{ __html: OBJECTIONS_HTML }} />;
}
