import { listMd, readMd, str, list } from "@/lib/content";
import { typo } from "@/lib/typo";

// Кейсы: content/cases/<slug>.md, один файл = один кейс. Новый кейс — новый файл, вёрстка не трогается.
// После 6 кейсов — отдельные страницы /keisy/[slug] (Blueprint).
export type Case = {
	slug: string; order: number; title: string; headline: string; tag: string; text: string;
	view: string; image: string; imageAlt: string; w: number; h: number;
	logo?: string; caption?: string; window?: string; forYou?: string;
	metrics: { value: string; label: string }[];
};

export function allCases(): Case[] {
	return typo(listMd("cases").map((slug) => {
		const { fm, body } = readMd("cases", slug, ["order", "title", "tag", "view", "image", "imageAlt", "imageSize"]);
		const [w, h] = str(fm.imageSize).split("x").map(Number);
		return {
			slug, order: Number(fm.order), title: str(fm.title), headline: str(fm.headline) || str(fm.title), tag: str(fm.tag), text: body,
			view: str(fm.view), image: str(fm.image), imageAlt: str(fm.imageAlt), w, h,
			logo: str(fm.logo) || undefined, caption: str(fm.caption) || undefined, window: str(fm.window) || undefined, forYou: str(fm.forYou) || undefined,
			metrics: list(fm.metric).map((m) => { const [value, label] = m.split(" | "); return { value, label }; }),
		};
	})).sort((a, b) => a.order - b.order);
}
