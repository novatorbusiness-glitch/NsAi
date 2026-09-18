"use client";

import { WHO_HTML, WHO_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function WhoSection() {
	return <Bilingual ru={WHO_HTML} en={WHO_HTML_EN} />;
}
