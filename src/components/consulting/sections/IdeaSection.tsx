"use client";

import { IDEA_HTML, IDEA_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function IdeaSection() {
	return <Bilingual ru={IDEA_HTML} en={IDEA_HTML_EN} />;
}
