"use client";

import { WORK_HTML, WORK_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function WorkSection() {
	return <Bilingual ru={WORK_HTML} en={WORK_HTML_EN} />;
}
