"use client";

import { PROGRAM_HTML } from "@/lib/ai-training-sections";

export default function ProgramSection() {
	return <div dangerouslySetInnerHTML={{ __html: PROGRAM_HTML }} />;
}
