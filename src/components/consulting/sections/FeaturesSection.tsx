"use client";

import { FEATURES_HTML } from "@/lib/consulting-sections";

export default function FeaturesSection() {
	return <div dangerouslySetInnerHTML={{ __html: FEATURES_HTML }} />;
}
