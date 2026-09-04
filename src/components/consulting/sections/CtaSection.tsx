"use client";

import { CTA_HTML } from "@/lib/consulting-sections";

export default function CtaSection() {
	return <div dangerouslySetInnerHTML={{ __html: CTA_HTML }} />;
}
