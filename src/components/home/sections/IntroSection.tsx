"use client";

import { INTRO_HTML } from "@/lib/home-sections";

export default function IntroSection() {
	return <div dangerouslySetInnerHTML={{ __html: INTRO_HTML }} />;
}
