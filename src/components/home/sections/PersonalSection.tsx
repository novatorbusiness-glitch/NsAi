"use client";

import { PERSONAL_HTML } from "@/lib/home-sections";

export default function PersonalSection() {
	return <div dangerouslySetInnerHTML={{ __html: PERSONAL_HTML }} />;
}
