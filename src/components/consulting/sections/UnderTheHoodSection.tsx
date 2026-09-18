"use client";

import { UNDER_HOOD_HTML, UNDER_HOOD_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function UnderTheHoodSection() {
	return <Bilingual ru={UNDER_HOOD_HTML} en={UNDER_HOOD_HTML_EN} />;
}
