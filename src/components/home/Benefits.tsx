import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · что вы получаете (вопрос собственника «что я получу?»); состав работы — ссылкой на «Как мы работаем».
export default function Benefits() {
	const c = home.benefits;
	return (
		<section id="scope" className="scope">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="brows">
					{c.cards.map((k, i) => <li key={k.title}><span className="bn">{String(i + 1).padStart(2, "0")}</span><h3>{k.title}</h3><p>{k.text}</p></li>)}
				</ol>
				<p className="more-link"><a href="/kak-my-rabotaem#scope">{c.more} →</a></p>
			</div>
		</section>
	);
}
