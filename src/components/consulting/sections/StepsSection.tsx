"use client";

import { STEPS_HTML, STEPS_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function StepsSection() {
	return <Bilingual ru={STEPS_HTML} en={STEPS_HTML_EN} />;
}
