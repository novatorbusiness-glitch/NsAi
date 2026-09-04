"use client";

import { HERO_HTML } from "@/lib/consulting-sections";

export default function ConsultingHero() {
	return <div dangerouslySetInnerHTML={{ __html: HERO_HTML }} />;
}
