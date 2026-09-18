"use client";

import { HIRE_HTML } from "@/lib/portfolio-sections";

export default function HireSection() {
	return <div dangerouslySetInnerHTML={{ __html: HIRE_HTML }} />;
}
