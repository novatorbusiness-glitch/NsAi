"use client";

import { REALWORK_HTML, REALWORK_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function RealWorkSection() {
	return <Bilingual ru={REALWORK_HTML} en={REALWORK_HTML_EN} />;
}
