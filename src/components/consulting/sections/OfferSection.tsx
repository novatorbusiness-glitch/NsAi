"use client";

import { OFFER_HTML } from "@/lib/consulting-sections";

export default function OfferSection() {
	return <div dangerouslySetInnerHTML={{ __html: OFFER_HTML }} />;
}
