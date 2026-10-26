import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { goals } from "@/config/goals";

// Экспресс-разбор за 190 ₽ строкой (решение Ильи 26.10): под статьями блога и в примере аудита.
export default function ExpressLine() {
	const c = common.ui.expressLine;
	return <p className="chline">{c.pre}<a href={site.contacts.expressBot} target="_blank" rel="noopener" data-goal={goals.express}>{c.link}</a>{c.post}</p>;
}
