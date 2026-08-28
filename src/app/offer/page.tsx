"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Публичный договор-оферта / Пользовательское соглашение (RU/EN).
// Исполнитель: Новицкий Илья Сергеевич, ИНН 550115335168, спецрежим НПД.
export default function OfferPage() {
	const { lang } = useLang();
	const ru = lang === "ru";

	return (
		<PageShell>
			<div className="w page-hero legal-shell">
				<p className="lb">{ru ? "Правовое" : "Legal"}</p>
				<h1 className="page-h1">
					{ru ? "Публичная оферта" : "Public Offer"}
				</h1>
				<p className="page-sub">
					{ru
						? "Публичный договор-оферта (Пользовательское соглашение) об условиях использования сайта https://ilya-novitsky.ru и его материалов."
						: "Public offer agreement (Terms of Use) governing the use of the website https://ilya-novitsky.ru and its materials."}
				</p>

				<h2 className="legal-h2">
					1. {ru ? "Общие положения" : "General provisions"}
				</h2>
				<p className="legal-p">
					{ru
						? "Настоящий документ, размещённый по адресу https://ilya-novitsky.ru/offer, является официальным предложением (публичной офертой) в соответствии со статьями 435 и 437 Гражданского кодекса Российской Федерации и определяет условия использования сайта https://ilya-novitsky.ru (далее — Сайт), а также порядок взаимодействия пользователей Сайта (далее — Пользователь) с его владельцем."
						: "This document, published at https://ilya-novitsky.ru/offer, is an official offer (public offer) in accordance with Articles 435 and 437 of the Civil Code of the Russian Federation and defines the terms of use of the website https://ilya-novitsky.ru (the Site), as well as the procedure for interaction between Site users (the User) and its owner."}
				</p>
				<p className="legal-p">
					{ru
						? "Оферта адресована неопределённому кругу лиц. Акцептом настоящей Оферты признаётся любое использование Сайта, в том числе: просмотр и чтение страниц и материалов, отправка форм, направление обращений, переход по ссылкам, размещённым на Сайте. С момента акцепта между Пользователем и Исполнителем заключается договор присоединения (Пользовательское соглашение) на условиях настоящей Оферты."
						: "The offer is addressed to an indefinite circle of persons. Acceptance of this offer is deemed to be any use of the Site, including: viewing and reading pages and materials, submitting forms, sending enquiries, following links placed on the Site. From the moment of acceptance, an adhesion agreement (Terms of Use) is concluded between the User and the Provider on the terms of this offer."}
				</p>
				<p className="legal-p">
					{ru
						? "Исполнителем по настоящей Оферте является Новицкий Илья Сергеевич, ИНН 550115335168, применяющий специальный налоговый режим «Налог на профессиональный доход» (далее — Исполнитель). Реквизиты Исполнителя указаны в разделе 7 настоящей Оферты."
						: "The Provider under this offer is Ilya Sergeyevich Novitsky, TIN 550115335168, applying the special tax regime “Professional Income Tax” (the Provider). The Provider’s details are set out in Section 7 of this offer."}
				</p>

				<h2 className="legal-h2">
					2. {ru ? "Предмет Оферты" : "Subject of the offer"}
				</h2>
				<p className="legal-p">
					{ru
						? "По настоящей Оферте Исполнитель предоставляет Пользователю безвозмездное право использования Сайта как информационного ресурса: просмотр, чтение и использование размещённых на Сайте материалов, в том числе книг, статей и иного контента, в личных, некоммерческих целях."
						: "Under this offer, the Provider grants the User a free right to use the Site as an information resource: to view, read and use materials posted on the Site, including books, articles and other content, for personal, non-commercial purposes."}
				</p>
				<p className="legal-p">
					{ru
						? "Настоящая Оферта не является публичной офертой на оказание платных услуг (консалтинг и внедрение систем NCAi, обучение работе с AI-инструментами, продажа книг, подписка). Сведения о продуктах и услугах, размещённые на Сайте, носят исключительно информационный характер и не порождают обязательств Исполнителя."
						: "This offer is not a public offer to provide paid services (NCAi consulting and implementation, AI tools training, sale of books, subscription). Information about products and services posted on the Site is provided for informational purposes only and does not create any obligations of the Provider."}
				</p>
				<p className="legal-p">
					{ru
						? "Заявка или обращение Пользователя, направленное через Сайт, по электронной почте или в мессенджерах, рассматривается как приглашение к переговорам и не порождает обязательств Исполнителя. Договор на оказание услуг заключается отдельно, после согласования сторонами предмета, состава, стоимости и сроков работ (в том числе технического задания), путём подписания договора либо иным согласованным сторонами способом (переписка, оплата по выставленному счёту)."
						: "A request or enquiry of the User sent through the Site, by e-mail or in messengers is considered an invitation to negotiate and does not create any obligations of the Provider. A services agreement is concluded separately, after the parties agree on the subject, scope, price and timelines of the work (including the technical specification), by signing an agreement or in any other manner agreed by the parties (correspondence, payment against an issued invoice)."}
				</p>

				<h2 className="legal-h2">
					3. {ru ? "Ответственность за действия третьих лиц" : "Responsibility for third parties"}
				</h2>
				<p className="legal-p">
					{ru
						? "Сайт может содержать ссылки на интернет-ресурсы третьих лиц, в том числе партнёрские ссылки и ссылки на продукты и услуги партнёров."
						: "The Site may contain links to third-party Internet resources, including partner links and links to partners’ products and services."}
				</p>
				<p className="legal-p">
					{ru
						? "Исполнитель не несёт ответственности за доступность, содержание, достоверность и последствия использования таких ресурсов. Взаимодействие Пользователя с третьими лицами, на ресурсы которых ведут ссылки с Сайта, регулируется их собственными правилами, политиками конфиденциальности и условиями, и осуществляется Пользователем самостоятельно и на свой риск."
						: "The Provider is not liable for the availability, content, accuracy or consequences of using such resources. The User’s interaction with third parties whose resources are linked from the Site is governed by their own rules, privacy policies and terms, and is carried out by the User independently and at their own risk."}
				</p>
				<p className="legal-p">
					{ru
						? "Упоминание на Сайте партнёров и их продуктов не является гарантией или поручительством Исполнителя по обязательствам таких третьих лиц."
						: "Mention of partners and their products on the Site is not a guarantee or surety of the Provider for the obligations of such third parties."}
				</p>

				<h2 className="legal-h2">
					4. {ru ? "Исключительные права" : "Exclusive rights"}
				</h2>
				<p className="legal-p">
					{ru
						? "Все материалы Сайта (тексты, книги, статьи, методики, структура, дизайн, изображения и иные объекты) являются результатами интеллектуальной деятельности и охраняются законодательством Российской Федерации об авторском праве и смежных правах (часть четвертая Гражданского кодекса РФ)."
						: "All materials of the Site (texts, books, articles, methodologies, structure, design, images and other objects) are results of intellectual activity and are protected by the legislation of the Russian Federation on copyright and related rights (Part IV of the Civil Code of the Russian Federation)."}
				</p>
				<p className="legal-p">
					{ru
						? "Запрещается полное или частичное копирование, воспроизведение, переработка, распространение, публикация и иное использование материалов Сайта без предварительного письменного согласия правообладателя, за исключением цитирования в объёме, допустимом статьёй 1274 Гражданского кодекса РФ, с обязательным указанием источника и автора."
						: "Full or partial copying, reproduction, processing, distribution, publication and any other use of the Site materials without the prior written consent of the right holder is prohibited, except for quotation to the extent permitted by Article 1274 of the Civil Code of the Russian Federation, with mandatory attribution of the source and the author."}
				</p>
				<p className="legal-p">
					{ru
						? "Пользователю запрещается использовать материалы Сайта в коммерческих целях, а также осуществлять автоматизированный сбор (парсинг) данных Сайта без отдельного письменного согласия Исполнителя."
						: "The User is prohibited from using the Site materials for commercial purposes, as well as from automated collection (scraping) of Site data without separate written consent of the Provider."}
				</p>

				<h2 className="legal-h2">
					5. {ru ? "Персональные данные" : "Personal data"}
				</h2>
				<p className="legal-p">
					{ru
						? "Используя Сайт и отправляя формы, Пользователь даёт согласие на обработку своих персональных данных (имя, контактный телефон, адрес электронной почты, контакт в мессенджере и иные сведения) в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и Политикой конфиденциальности, размещённой по адресу https://ilya-novitsky.ru/privacy."
						: "By using the Site and submitting forms, the User consents to the processing of their personal data (name, contact phone number, e-mail address, messenger contact and other details) in accordance with Federal Law No. 152-FZ of 27.07.2006 “On Personal Data” and the Privacy Policy published at https://ilya-novitsky.ru/privacy."}
				</p>
				<p className="legal-p">
					{ru
						? "Обработка персональных данных осуществляется в целях связи с Пользователем, ответов на обращения, заключения и исполнения договоров на оказание услуг. Согласие может быть отозвано Пользователем в любой момент путём направления запроса на адрес электронной почты, указанный в разделе 7 настоящей Оферты."
						: "Personal data is processed for the purposes of contacting the User, responding to enquiries, entering into and performing services agreements. The User may withdraw consent at any time by sending a request to the e-mail address specified in Section 7 of this offer."}
				</p>

				<h2 className="legal-h2">
					6. {ru ? "Заключительные положения" : "Final provisions"}
				</h2>
				<p className="legal-p">
					{ru
						? "Исполнитель вправе в одностороннем порядке вносить изменения в настоящую Оферту без предварительного уведомления Пользователя. Новая редакция Оферты вступает в силу с момента её опубликования на Сайте. Продолжение использования Сайта после опубликования новой редакции означает согласие Пользователя с её условиями."
						: "The Provider may unilaterally amend this offer without prior notice to the User. The new version of the offer takes effect upon its publication on the Site. Continued use of the Site after the publication of a new version means the User’s consent to its terms."}
				</p>
				<p className="legal-p">
					{ru
						? "Во всём, что не урегулировано настоящей Офертой, стороны руководствуются законодательством Российской Федерации. Споры и разногласия, возникающие в связи с настоящей Офертой, разрешаются путём переговоров; при недостижении согласия — в судебном порядке в соответствии с законодательством РФ по месту нахождения Исполнителя."
						: "In all matters not regulated by this offer, the parties are governed by the legislation of the Russian Federation. Disputes and disagreements arising in connection with this offer are resolved through negotiations; if no agreement is reached — in court in accordance with the legislation of the Russian Federation at the location of the Provider."}
				</p>
				<p className="legal-p">
					{ru
						? "Документы, уведомления и сообщения, направленные Исполнителем по электронной почте или через мессенджеры с контактов, указанных в разделе 7 настоящей Оферты, признаются направленными надлежащим образом и имеют юридическую силу, если иное не предусмотрено законодательством РФ."
						: "Documents, notices and messages sent by the Provider by e-mail or through messengers from the contacts specified in Section 7 of this offer are deemed properly sent and have legal force, unless otherwise provided by the legislation of the Russian Federation."}
				</p>
				<p className="legal-p">
					{ru
						? "Признание какого-либо положения настоящей Оферты недействительным не влечёт недействительности остальных её положений."
						: "The invalidation of any provision of this offer does not entail the invalidity of its other provisions."}
				</p>

				<h2 className="legal-h2">
					7. {ru ? "Реквизиты Исполнителя" : "Provider’s details"}
				</h2>
				<ul className="legal-list">
					<li className="legal-li">
						<strong>{ru ? "Исполнитель:" : "Provider:"}</strong>{" "}
						{ru
							? "Новицкий Илья Сергеевич."
							: "Ilya Sergeyevich Novitsky."}
					</li>
					<li className="legal-li">
						<strong>ИНН:</strong> 550115335168
					</li>
					<li className="legal-li">
						<strong>{ru ? "Специальный налоговый режим:" : "Special tax regime:"}</strong>{" "}
						{ru
							? "«Налог на профессиональный доход» (самозанятый)."
							: "“Professional Income Tax” (self-employed)."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Сайт:" : "Website:"}</strong> https://ilya-novitsky.ru
					</li>
					<li className="legal-li">
						<strong>Email:</strong> info@novator.vip{" "}
						{ru
							? "(дополнительный канал связи — ilya.novitskii@yandex.ru)"
							: "(additional contact — ilya.novitskii@yandex.ru)"}
					</li>
					<li className="legal-li">
						<strong>Telegram:</strong> @Ilya_novator
					</li>
				</ul>

				<div className="legal-updated">
					{ru ? "Дата последнего обновления:" : "Last updated:"} 28 {ru ? "августа" : "August"} 2026
				</div>
			</div>
		</PageShell>
	);
}
