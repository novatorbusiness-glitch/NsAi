"use client";

import { PRINCIPLES_HTML } from "@/lib/home-sections";

export default function PrinciplesSection() {
	return <div dangerouslySetInnerHTML={{ __html: PRINCIPLES_HTML }} />;
}
