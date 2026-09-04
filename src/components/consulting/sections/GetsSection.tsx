"use client";

import { GETS_HTML } from "@/lib/consulting-sections";

export default function GetsSection() {
	return <div dangerouslySetInnerHTML={{ __html: GETS_HTML }} />;
}
