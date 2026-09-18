"use client";

import { JOURNEY_HTML, JOURNEY_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function JourneySection() {
	return <Bilingual ru={JOURNEY_HTML} en={JOURNEY_HTML_EN} />;
}
