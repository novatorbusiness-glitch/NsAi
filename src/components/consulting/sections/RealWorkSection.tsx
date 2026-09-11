"use client";

import { REALWORK_HTML } from "@/lib/consulting-sections";

export default function RealWorkSection() {
	return <div dangerouslySetInnerHTML={{ __html: REALWORK_HTML }} />;
}
