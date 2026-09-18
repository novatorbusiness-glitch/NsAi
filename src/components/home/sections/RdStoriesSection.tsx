"use client";

import { RD_STORIES_HTML, RD_STORIES_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function RdStoriesSection() {
	return <Bilingual ru={RD_STORIES_HTML} en={RD_STORIES_HTML_EN} />;
}
