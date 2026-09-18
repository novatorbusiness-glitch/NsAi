"use client";

import { HERO_HTML } from "@/lib/ai-training-sections";

export default function HeroSection() {
	return <div dangerouslySetInnerHTML={{ __html: HERO_HTML }} />;
}
