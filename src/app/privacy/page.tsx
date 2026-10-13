import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { common } from "@content/pages/common";
import { pageMeta } from "@/lib/seo";

const d = common.legal.docs.find((x) => x.slug === "privacy")!;
export const metadata: Metadata = pageMeta(d, "/privacy", "privacy", { noindex: true });

export default function Page() {
	return <LegalPage slug="privacy" />;
}
