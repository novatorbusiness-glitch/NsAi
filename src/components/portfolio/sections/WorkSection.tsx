"use client";

import { WORK_HTML } from "@/lib/portfolio-sections";

export default function WorkSection() {
	return <div dangerouslySetInnerHTML={{ __html: WORK_HTML }} />;
}
