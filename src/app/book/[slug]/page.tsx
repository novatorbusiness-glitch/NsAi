import fs from "fs";
import path from "path";

export function generateStaticParams() {
	const dir = path.join(process.cwd(), "content/book");
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

interface ChapterPageProps {
	params: {
		slug: string;
	};
}

export default function ChapterPage({ params }: ChapterPageProps) {
	return (
		<main className="w" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
			Глава: {params.slug}
		</main>
	);
}
