import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { common } from "@content/pages/common";

const d = common.legal.docs.find((x) => x.slug === "privacy")!;
export const metadata: Metadata = { title: d.title, description: d.description, alternates: { canonical: "/privacy" }, robots: { index: false } };

export default function Page() {
	return <LegalPage slug="privacy" />;
}
