"use client";

import { PERSONAL_HTML, PERSONAL_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function PersonalSection() {
	return <Bilingual ru={PERSONAL_HTML} en={PERSONAL_HTML_EN} />;
}
