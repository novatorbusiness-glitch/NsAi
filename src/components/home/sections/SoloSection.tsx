"use client";

import { SOLO_HTML, SOLO_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function SoloSection() {
	return <Bilingual ru={SOLO_HTML} en={SOLO_HTML_EN} />;
}
