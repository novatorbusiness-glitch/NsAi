"use client";

import { CONTACT_HTML, CONTACT_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ContactSection() {
	return <Bilingual ru={CONTACT_HTML} en={CONTACT_HTML_EN} />;
}
