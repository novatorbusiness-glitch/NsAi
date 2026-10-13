import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/blog/ArticleCard";
import { allPosts } from "@/lib/blog";
import { site } from "@/config/site";

export const metadata: Metadata = {
	title: "Блог: продукт, цены и путь клиента до оплаты",
	description: "Разборы для предпринимателей: сколько стоит запуск, как поднять продажи ценой и предложением, где найти первых клиентов и как вернуть старых. На своих цифрах.",
	alternates: { canonical: "/blog" },
};

export default function BlogPage() {
	const [first, ...rest] = allPosts();
	return (
		<>
			<section className="hero bloghero">
				<div className="wrap">
					<p className="crumbs"><Link href="/">Главная</Link><span>/</span>Блог</p>
					<h1>Блог</h1>
					<p className="lead">Разбираю, где бизнес может заработать больше и где тихо теряет то, что уже заработал: запуск продукта, цены, путь клиента до оплаты, повторные продажи. На своих проектах и с цифрами.</p>
					<p className="tgline">Короткие заметки по ходу работы пишу в Telegram-канале <a href={site.contacts.channel} target="_blank" rel="noopener">{site.contacts.channelHandle}</a></p>
				</div>
			</section>
			<section className="alt blogs">
				<div className="wrap">
					<ArticleCard p={first} big />
					<div className="agrid">
						{rest.map((p) => <ArticleCard key={p.slug} p={p} />)}
					</div>
				</div>
			</section>
			<section className="final">
				<div className="wrap">
					<div className="card">
						<h2>Нашли в статье свою ситуацию?</h2>
						<p className="lead">Напишите в Telegram или MAX, что у вас сейчас происходит. Начнём с одной задачи: за 3–4 дня я её разберу и скажу, что делать первым.</p>
						<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">Написать в Telegram</a>{" "}
						<a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">Написать в MAX</a>
						<p className="under">{site.contacts.telegramHandle} · Тест-драйв: 40 000 ₽ · 3–4 дня</p>
					</div>
				</div>
			</section>
		</>
	);
}
