"use client";

import { MECHANISM_HTML } from "@/lib/ai-training-sections";

export default function MechanismSection() {
	return <div dangerouslySetInnerHTML={{ __html: MECHANISM_HTML }} />;
}
