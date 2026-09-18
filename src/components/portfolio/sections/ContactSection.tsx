"use client";

import { CONTACT_HTML } from "@/lib/portfolio-sections";

export default function ContactSection() {
	return <div dangerouslySetInnerHTML={{ __html: CONTACT_HTML }} />;
}
