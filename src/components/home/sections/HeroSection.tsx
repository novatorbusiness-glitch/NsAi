"use client";

import { HERO_HTML } from "@/lib/home-sections";

export default function HeroSection() {
	return <div dangerouslySetInnerHTML={{ __html: HERO_HTML }} />;
}
