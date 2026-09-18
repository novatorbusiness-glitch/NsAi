"use client";

import { HERO_HTML } from "@/lib/portfolio-sections";

export default function HeroSection() {
	return <div dangerouslySetInnerHTML={{ __html: HERO_HTML }} />;
}
