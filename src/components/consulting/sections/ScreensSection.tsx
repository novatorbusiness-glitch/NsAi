"use client";

import { SCREENS_HTML } from "@/lib/consulting-sections";

export default function ScreensSection() {
	return <div dangerouslySetInnerHTML={{ __html: SCREENS_HTML }} />;
}
