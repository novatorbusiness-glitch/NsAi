"use client";

import { IDEA_HTML } from "@/lib/consulting-sections";

export default function IdeaSection() {
	return <div dangerouslySetInnerHTML={{ __html: IDEA_HTML }} />;
}
