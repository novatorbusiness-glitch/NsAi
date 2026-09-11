"use client";

import { PANEL_HTML } from "@/lib/consulting-sections";

export default function PanelSection() {
	return <div dangerouslySetInnerHTML={{ __html: PANEL_HTML }} />;
}
