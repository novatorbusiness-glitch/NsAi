"use client";

import { CLOSING_HTML, CLOSING_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ClosingSection() {
	return <Bilingual ru={CLOSING_HTML} en={CLOSING_HTML_EN} />;
}
