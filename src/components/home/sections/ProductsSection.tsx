"use client";

import { PRODUCTS_HTML, PRODUCTS_HTML_EN } from "@/lib/home-sections";
import Bilingual from "@/components/layout/Bilingual";

export default function ProductsSection() {
	return <Bilingual ru={PRODUCTS_HTML} en={PRODUCTS_HTML_EN} />;
}
