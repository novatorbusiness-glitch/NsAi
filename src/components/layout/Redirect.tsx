import Link from "next/link";
import { common } from "@content/pages/common";

// Переадресация для статического сайта: replace с метками и якорем (UTM из ботов и PDF не теряются), meta refresh и ссылка — на случай без JS.
export default function Redirect({ to }: { to: string }) {
	return (
		<section className="hero">
			<script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(to)}+location.search+location.hash)` }} />
			<meta httpEquiv="refresh" content={`0; url=${to}`} />
			<div className="wrap">
				<p>{common.redirect.text} <Link href={to}>{common.redirect.link}</Link>.</p>
			</div>
		</section>
	);
}
