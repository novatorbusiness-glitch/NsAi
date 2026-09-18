"use client";

import { AMP_HTML, AMP_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function AmpSection() {
	return <Bilingual ru={AMP_HTML} en={AMP_HTML_EN} />;
}
