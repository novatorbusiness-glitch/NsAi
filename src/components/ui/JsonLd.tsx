// Разметка schema.org для поисковиков (lib/seo.ts).
export default function JsonLd({ data }: { data: object | object[] }) {
	const list = Array.isArray(data) ? data : [data];
	return <>{list.map((d, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />)}</>;
}
