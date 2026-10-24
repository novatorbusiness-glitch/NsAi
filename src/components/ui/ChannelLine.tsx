import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { goals } from "@/config/goals";

// Подписка на канал вторым путём под кнопками заявки (решение Ильи 24.10): финальные блоки страниц, карточка книги, конец глав.
export default function ChannelLine({ short }: { short?: boolean }) {
	const c = common.ui.channelLine;
	const a = (t: string) => <a href={site.contacts.channel} target="_blank" rel="noopener" data-goal={goals.channel}>{t}</a>;
	return <p className="chline">{short ? a(common.ui.channelLink) : <>{c.pre}{a(c.link)}{c.post}</>}</p>;
}
