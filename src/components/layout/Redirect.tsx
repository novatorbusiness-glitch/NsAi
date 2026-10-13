import Link from "next/link";
import { common } from "@content/pages/common";

// Переадресация для статического сайта: meta refresh + replace, ссылка — на случай без JS.
export default function Redirect({ to }: { to: string }) {
	return (
		<section className="hero">
			<meta httpEquiv="refresh" content={`0; url=${to}`} />
			<script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(to)})` }} />
			<div className="wrap">
				<p>{common.redirect.text} <Link href={to}>{common.redirect.link}</Link>.</p>
			</div>
		</section>
	);
}
