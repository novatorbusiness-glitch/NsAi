"use client";

import { VIDEO_HTML, VIDEO_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function VideoSection() {
	return <Bilingual ru={VIDEO_HTML} en={VIDEO_HTML_EN} />;
}
