import { render } from "@/lib/blog";

// Текст статьи: markdown → HTML.
export default function ArticleBody({ body }: { body: string }) {
	const { parts } = render(body);
	return <>{parts.map((p, i) => <div key={i} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: p }} />)}</>;
}
