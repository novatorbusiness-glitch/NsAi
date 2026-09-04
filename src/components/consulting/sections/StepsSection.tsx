"use client";

import { STEPS_HTML } from "@/lib/consulting-sections";

export default function StepsSection() {
	return <div dangerouslySetInnerHTML={{ __html: STEPS_HTML }} />;
}
