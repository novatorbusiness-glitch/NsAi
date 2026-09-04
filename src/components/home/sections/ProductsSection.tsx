"use client";

import { PRODUCTS_HTML } from "@/lib/home-sections";

export default function ProductsSection() {
	return <div dangerouslySetInnerHTML={{ __html: PRODUCTS_HTML }} />;
}
