"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Публичная оферта: консультационные и образовательные услуги NCAi.
export default function OfferPage() {
	const { lang } = useLang();
	const ru = lang === "ru";

	return (
		<PageShell>
			<div className="w page-hero legal-shell">
				<p className="lb">{ru ? "Правовое" : "Legal"}</p>
				<h1 className="page-h1">{ru ? "Публичная оферта" : "Public Offer"}</h1>
				<p className="page-sub">
					{ru
						? "Договор оказания консультационных и образовательных услуг между Ильёй Новицким (NCAi) и Заказчиком."
						: "Agreement for consulting and educational services between Ilya Novitsky (NCAi) and the Client."}
				</p>

				<h2 className="legal-h2">1. {ru ? "Общие положения" : "General provisions"}</h2>
				<p className="legal-p">
					{ru
						? "Настоящий документ является официальным предложением (публичной офертой) Ильи Новицкого (далее — Исполнитель) заключить договор оказания консультационных и образовательных услуг. Акцептом оферты считается оплата услуг. С момента оплаты договор считается заключённым."
						: "This document is the official offer by Ilya Novitsky (the Provider) to enter into an agreement for consulting and educational services. Acceptance is deemed payment. The agreement is considered concluded upon payment."}
				</p>

				<h2 className="legal-h2">2. {ru ? "Предмет договора" : "Subject of the agreement"}</h2>
				<p className="legal-p">
					{ru
						? "Исполнитель оказывает услуги, указанные на страницах Сайта: консалтинг и внедрение систем (NCAi), обучение работе с AI-инструментами 1 на 1, подготовка цифровых продуктов. Конкретный состав, сроки и стоимость услуг фиксируются в коммерческом предложении или переписке перед оплатой."
						: "The Provider renders services described on the Site: consulting and implementation (NCAi), 1-on-1 AI training, digital product delivery. Scope, timeline and price are fixed in the commercial proposal or correspondence before payment."}
				</p>

				<h2 className="legal-h2">3. {ru ? "Стоимость и оплата" : "Price and payment"}</h2>
				<ul className="legal-list">
					<li className="legal-li">
						{ru
							? "Стоимость услуг указывается в рублях и фиксируется перед оплатой."
							: "Services are priced in rubles and fixed before payment."}
					</li>
					<li className="legal-li">
						{ru
							? "Оплата производится безналичным переводом по реквизитам, согласованным в переписке."
							: "Payment is made by bank transfer to details agreed in correspondence."}
					</li>
					<li className="legal-li">
						{ru
							? "Цены на Сайт являются ориентировочными (например, обучение AI — 70 000–80 000 ₽ за месяц) и уточняются в зависимости от состава работ."
							: "Prices on the Site are indicative (e.g. AI training — 70,000–80,000 RUB/month) and are refined based on scope."}
					</li>
				</ul>

				<h2 className="legal-h2">4. {ru ? "Порядок оказания услуг" : "Delivery"}</h2>
				<p className="legal-p">
					{ru
						? "Сроки оказания услуг согласуются сторонами. Сессии проводятся онлайн (видеоконференция, мессенджер). Исполнитель предоставляет записи занятий и материалы, предусмотренные тарифом."
						: "Timeline is agreed by the parties. Sessions are held online (video call, messenger). The Provider delivers recordings and materials included in the plan."}
				</p>

				<h2 className="legal-h2">5. {ru ? "Права и обязанности сторон" : "Rights and obligations"}</h2>
				<ul className="legal-list">
					<li className="legal-li">
						{ru
							? "Заказчик обязуется предоставлять достоверные данные о своём проекте и выполнять домашние задания в рамках обучения."
							: "The Client undertakes to provide accurate project information and complete homework within training."}
					</li>
					<li className="legal-li">
						{ru
							? "Исполнитель обязуется оказывать услуги качественно и в согласованные сроки."
							: "The Provider undertakes to render services with due quality and within agreed timelines."}
					</li>
					<li className="legal-li">
						{ru
							? "Результаты интеллектуальной деятельности, созданные в рамках услуг, передаются Заказчику в объёме, определённом договором."
							: "Intellectual results created under the agreement are transferred to the Client to the extent defined by the agreement."}
					</li>
				</ul>

				<h2 className="legal-h2">6. {ru ? "Возврат и расторжение" : "Refunds and termination"}</h2>
				<p className="legal-p">
					{ru
						? "Заказчик вправе отказаться от услуг до начала их оказания с возвратом оплаты за вычетом фактически понесённых расходов. При отказе после начала оказания услуг возврат рассчитывается пропорционально неоказанной части. Обучающие материалы (записи, файлы) возврату не подлежат после предоставления доступа."
						: "The Client may cancel before services start, receiving a refund less actual expenses incurred. After start, refunds are proportional to unrendered services. Educational materials (recordings, files) are non-refundable once access is granted."}
				</p>

				<h2 className="legal-h2">7. {ru ? "Конфиденциальность" : "Confidentiality"}</h2>
				<p className="legal-p">
					{ru
						? "Информация о проекте Заказчика является конфиденциальной и не разглашается, за исключением случаев, предусмотренных законом. Подробнее — в Политике конфиденциальности."
						: "Client project information is confidential and not disclosed except as required by law. See the Privacy Policy for details."}
				</p>

				<h2 className="legal-h2">8. {ru ? "Реквизиты и связь" : "Contact details"}</h2>
				<p className="legal-p">
					{ru
						? "Исполнитель: Илья Новицкий (NCAi). Сайт: ilya-novitsky.ru. Контакты: Telegram @Ilya_novator, email ilya.novitskii@yandex.ru."
						: "Provider: Ilya Novitsky (NCAi). Site: ilya-novitsky.ru. Contacts: Telegram @Ilya_novator, email ilya.novitskii@yandex.ru."}
				</p>

				<div className="legal-updated">
					{ru ? "Последнее обновление:" : "Last updated:"} 28 {ru ? "августа" : "August"} 2026
				</div>
			</div>
		</PageShell>
	);
}
