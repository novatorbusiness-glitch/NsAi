import StepPicker from "@/components/home/StepPicker";
import { render } from "@/lib/blog";

// Текст статьи: markdown → HTML, отметка [[pick]] — подбор шага.
export default function ArticleBody({ body }: { body: string }) {
	const { parts } = render(body);
	return <>{parts.map((p, i) => (typeof p === "string" ? <div key={i} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: p }} /> : <StepPicker key={i} id="pick-a" />))}</>;
}
