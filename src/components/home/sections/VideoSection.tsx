"use client";

import { VIDEO_HTML } from "@/lib/home-sections";

export default function VideoSection() {
	return <div dangerouslySetInnerHTML={{ __html: VIDEO_HTML }} />;
}
