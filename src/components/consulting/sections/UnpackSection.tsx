"use client";

import { UNPACK_HTML } from "@/lib/consulting-sections";

export default function UnpackSection() {
	return <div dangerouslySetInnerHTML={{ __html: UNPACK_HTML }} />;
}
