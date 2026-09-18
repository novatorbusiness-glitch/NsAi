"use client";

import { PARTNER_HTML } from "@/lib/portfolio-sections";

export default function PartnerSection() {
	return <div dangerouslySetInnerHTML={{ __html: PARTNER_HTML }} />;
}
