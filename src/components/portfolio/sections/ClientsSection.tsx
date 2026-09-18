"use client";

import { CLIENTS_HTML, CLIENTS_HTML_EN } from "@/lib/portfolio-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ClientsSection() {
	return <Bilingual ru={CLIENTS_HTML} en={CLIENTS_HTML_EN} />;
}
