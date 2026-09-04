"use client";

import { CASES_HTML } from "@/lib/consulting-sections";

export default function CasesSection() {
	return <div dangerouslySetInnerHTML={{ __html: CASES_HTML }} />;
}
