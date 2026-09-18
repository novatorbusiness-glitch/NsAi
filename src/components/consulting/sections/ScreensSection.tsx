"use client";

import { SCREENS_HTML, SCREENS_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ScreensSection() {
	return <Bilingual ru={SCREENS_HTML} en={SCREENS_HTML_EN} />;
}
