"use client";

import { MECHANISM_HTML } from "@/lib/home-sections";

export default function MechanismSection() {
	return <div dangerouslySetInnerHTML={{ __html: MECHANISM_HTML }} />;
}
