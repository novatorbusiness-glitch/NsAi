"use client";

import { AMP_HTML } from "@/lib/ai-training-sections";

export default function AmpSection() {
	return <div dangerouslySetInnerHTML={{ __html: AMP_HTML }} />;
}
