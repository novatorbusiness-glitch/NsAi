"use client";

import { CLIENTS_HTML } from "@/lib/home-sections";

export default function ClientsSection() {
	return <div dangerouslySetInnerHTML={{ __html: CLIENTS_HTML }} />;
}
