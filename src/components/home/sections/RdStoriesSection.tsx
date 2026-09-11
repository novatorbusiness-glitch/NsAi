"use client";

import { RD_STORIES_HTML } from "@/lib/home-sections";

export default function RdStoriesSection() {
	return <div dangerouslySetInnerHTML={{ __html: RD_STORIES_HTML }} />;
}
