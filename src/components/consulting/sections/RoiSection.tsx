"use client";

import { ROI_HTML } from "@/lib/consulting-sections";

export default function RoiSection() {
	return <div dangerouslySetInnerHTML={{ __html: ROI_HTML }} />;
}
