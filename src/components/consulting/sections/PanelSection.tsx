"use client";

import { PANEL_HTML, PANEL_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function PanelSection() {
	return <Bilingual ru={PANEL_HTML} en={PANEL_HTML_EN} />;
}
