"use client";

import { JOURNEY_HTML } from "@/lib/home-sections";

export default function JourneySection() {
	return <div dangerouslySetInnerHTML={{ __html: JOURNEY_HTML }} />;
}
