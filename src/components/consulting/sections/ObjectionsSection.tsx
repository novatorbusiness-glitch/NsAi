"use client";

import { OBJECTIONS_HTML, OBJECTIONS_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ObjectionsSection() {
	return <Bilingual ru={OBJECTIONS_HTML} en={OBJECTIONS_HTML_EN} />;
}
