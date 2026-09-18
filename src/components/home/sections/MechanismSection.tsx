"use client";

import { MECHANISM_HTML, MECHANISM_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function MechanismSection() {
	return <Bilingual ru={MECHANISM_HTML} en={MECHANISM_HTML_EN} />;
}
