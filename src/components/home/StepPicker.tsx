import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { common } from "@content/pages/common";

// Подбор шага одним вопросом (блок 4а): главная и статьи блога.
export default function StepPicker({ id = "pick" }: { id?: string }) {
	const c = common.picker;
	return (
		<div className="pick-wrap" id={id}>
			<h3>{c.h3}</h3>
			<p className="sub">{c.sub}</p>
			<div className="pick">
				{c.options.map((o, i) => <details key={o.q}><summary>{o.q}</summary><div className="ans"><p><Rich t={o.a} /></p><a className="btn p" href={site.contacts.telegram} data-goal="pick_step" data-variant={i + 1} target="_blank" rel="noopener">{common.buttons.telegram}</a></div></details>)}
			</div>
		</div>
	);
}
