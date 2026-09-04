"use client";

import { ABOUT_HTML } from "@/lib/home-sections";

export default function AboutSection() {
	return <div dangerouslySetInnerHTML={{ __html: ABOUT_HTML }} />;
}
