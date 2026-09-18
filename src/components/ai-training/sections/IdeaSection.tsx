"use client";

import { IDEA_HTML } from "@/lib/ai-training-sections";

export default function IdeaSection() {
	return <div dangerouslySetInnerHTML={{ __html: IDEA_HTML }} />;
}
