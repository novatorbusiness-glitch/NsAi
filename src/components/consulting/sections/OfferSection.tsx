"use client";

import { OFFER_HTML, OFFER_HTML_EN } from "@/lib/consulting-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function OfferSection() {
	return <Bilingual ru={OFFER_HTML} en={OFFER_HTML_EN} />;
}
