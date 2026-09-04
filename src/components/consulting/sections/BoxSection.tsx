"use client";

import { BOX_HTML } from "@/lib/consulting-sections";

export default function BoxSection() {
	return <div dangerouslySetInnerHTML={{ __html: BOX_HTML }} />;
}
