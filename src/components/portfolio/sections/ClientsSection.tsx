"use client";

import { CLIENTS_HTML } from "@/lib/portfolio-sections";

export default function ClientsSection() {
	return <div dangerouslySetInnerHTML={{ __html: CLIENTS_HTML }} />;
}
