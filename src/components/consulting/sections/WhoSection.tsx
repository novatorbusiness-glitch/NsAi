"use client";

import { WHO_HTML } from "@/lib/consulting-sections";

export default function WhoSection() {
	return <div dangerouslySetInnerHTML={{ __html: WHO_HTML }} />;
}
