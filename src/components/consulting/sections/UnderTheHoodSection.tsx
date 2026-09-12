"use client";

import { UNDER_HOOD_HTML } from "@/lib/consulting-sections";

export default function UnderTheHoodSection() {
	return <div dangerouslySetInnerHTML={{ __html: UNDER_HOOD_HTML }} />;
}
