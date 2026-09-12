"use client";

import { VS_AI_HTML } from "@/lib/consulting-sections";

export default function VsAiSection() {
	return <div dangerouslySetInnerHTML={{ __html: VS_AI_HTML }} />;
}
