import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { common } from "@content/pages/common";

const d = common.legal.docs.find((x) => x.slug === "offer")!;
export const metadata: Metadata = { title: d.title, description: d.description, alternates: { canonical: "/offer" }, robots: { index: false } };

export default function Page() {
	return <LegalPage slug="offer" />;
}
