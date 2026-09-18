"use client";

import { FEATURES_HTML, FEATURES_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function FeaturesSection() {
	return <Bilingual ru={FEATURES_HTML} en={FEATURES_HTML_EN} />;
}
