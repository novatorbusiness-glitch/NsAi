"use client";

import { CLOSING_HTML } from "@/lib/home-sections";

export default function ClosingSection() {
	return <div dangerouslySetInnerHTML={{ __html: CLOSING_HTML }} />;
}
