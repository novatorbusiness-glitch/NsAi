"use client";

import { SOLO_HTML } from "@/lib/home-sections";

export default function SoloSection() {
	return <div dangerouslySetInnerHTML={{ __html: SOLO_HTML }} />;
}
