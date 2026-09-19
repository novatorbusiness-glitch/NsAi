"use client";

import { DEMO_HTML, DEMO_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function DemoSection() {
	return <Bilingual ru={DEMO_HTML} en={DEMO_HTML_EN} />;
}
