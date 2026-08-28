"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Политика конфиденциальности (RU/EN) — ФЗ-152 от 27.07.2006 № 152-ФЗ.
// Оператор: Новицкий Илья Сергеевич, ИНН 550115335168, спецрежим НПД.
export default function PrivacyPage() {
	const { lang } = useLang();
	const ru = lang === "ru";

	return (
		<PageShell>
			<div className="w page-hero legal-shell">
				<p className="lb">{ru ? "Правовое" : "Legal"}</p>
				<h1 className="page-h1">
					{ru ? "Политика конфиденциальности" : "Privacy Policy"}
				</h1>
				<p className="page-sub">
					{ru
						? "Политика обработки персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»."
						: "Personal data processing policy under Federal Law No. 152-FZ of 27.07.2006 “On Personal Data”."}
				</p>

				<h2 className="legal-h2">
					1. {ru ? "Общие положения" : "General provisions"}
				</h2>
				<p className="legal-p">
					{ru
						? "Настоящая Политика в отношении обработки персональных данных (далее — Политика) разработана во исполнение требований Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» (далее — ФЗ-152) и определяет порядок и условия обработки персональных данных (далее — ПД) пользователей сайта https://ilya-novitsky.ru (далее — Сайт)."
						: "This Personal Data Processing Policy (the Policy) is developed in compliance with Federal Law No. 152-FZ of 27.07.2006 “On Personal Data” (the Law) and defines the procedure and conditions for processing personal data (PD) of users of the website https://ilya-novitsky.ru (the Site)."}
				</p>
				<p className="legal-p">
					{ru
						? "Оператором, организующим и осуществляющим обработку ПД, является Новицкий Илья Сергеевич, ИНН 550115335168, применяющий специальный налоговый режим «Налог на профессиональный доход» (далее — Оператор)."
						: "The operator that organizes and carries out PD processing is Ilya Sergeyevich Novitsky, TIN 550115335168, applying the special tax regime “Professional Income Tax” (the Operator)."}
				</p>
				<p className="legal-p">
					{ru
						? "Используя Сайт и его сервисы (просмотр страниц, отправка форм, направление обращений, заключение договоров, оплата), пользователь свободно, своей волей и в своём интересе выражает согласие с условиями настоящей Политики. Если пользователь не согласен с условиями Политики, он должен прекратить использование Сайта."
						: "By using the Site and its services (viewing pages, submitting forms, sending enquiries, entering into contracts, making payments), the user freely and in their own interest consents to the terms of this Policy. If a user does not agree with the Policy, they must stop using the Site."}
				</p>
				<p className="legal-p">
					{ru
						? "Настоящая Политика действует бессрочно и применяется до момента её замены новой редакцией, опубликованной на Сайте."
						: "This Policy is valid indefinitely and applies until replaced by a new version published on the Site."}
				</p>

				<h2 className="legal-h2">
					2. {ru ? "Основные понятия" : "Basic terms"}
				</h2>
				<p className="legal-p">
					{ru
						? "В настоящей Политике используются следующие понятия (статья 3 ФЗ-152):"
						: "The Policy uses the following terms (Article 3 of the Law):"}
				</p>
				<ul className="legal-list">
					<li className="legal-li">
						<strong>{ru ? "Персональные данные" : "Personal data"}</strong>{" "}
						{ru
							? "— любая информация, относящаяся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных)."
							: "— any information relating to a directly or indirectly identified or identifiable natural person (the data subject)."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Оператор" : "Operator"}</strong>{" "}
						{ru
							? "— лицо, самостоятельно или совместно с другими лицами организующее и (или) осуществляющее обработку персональных данных, а также определяющее цели обработки, состав персональных данных, подлежащих обработке, и действия (операции), совершаемые с персональными данными."
							: "— a person that alone or jointly with others organizes and/or carries out PD processing and determines the purposes of processing, the composition of PD to be processed, and the actions (operations) performed with PD."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Обработка персональных данных" : "Processing of personal data"}</strong>{" "}
						{ru
							? "— любое действие (операция) или совокупность действий (операций) с персональными данными, совершаемых с использованием средств автоматизации или без их использования: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение."
							: "— any action (operation) or set of actions (operations) performed with PD, with or without the use of automation: collection, recording, systematization, accumulation, storage, updating (revision, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Автоматизированная обработка" : "Automated processing"}</strong>{" "}
						{ru
							? "— обработка персональных данных с помощью средств вычислительной техники."
							: "— PD processing with the use of computer technology."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Информационная система персональных данных" : "Personal data information system"}</strong>{" "}
						{ru
							? "— совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств."
							: "— a set of PD contained in databases and of information technologies and technical means that enable their processing."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Блокирование, обезличивание, уничтожение" : "Blocking, depersonalization, destruction"}</strong>{" "}
						{ru
							? "— прекращение доступа, действия, в результате которых невозможно определить принадлежность данных конкретному субъекту без дополнительной информации, и действия, в результате которых данные безвозвратно уничтожаются."
							: "— termination of access, actions that make it impossible to attribute data to a specific subject without additional information, and actions that irrevocably destroy the data."}
					</li>
				</ul>

				<h2 className="legal-h2">
					3. {ru ? "Какие персональные данные обрабатываются" : "What personal data is processed"}
				</h2>
				<p className="legal-p">
					{ru
						? "Оператор обрабатывает следующие категории ПД:"
						: "The Operator processes the following categories of PD:"}
				</p>
				<ul className="legal-list">
					<li className="legal-li">
						<strong>
							{ru ? "Данные, предоставляемые пользователем самостоятельно:" : "Data provided by the user directly:"}
						</strong>{" "}
						{ru
							? "фамилия, имя, отчество (при наличии); номер контактного телефона; адрес электронной почты; контакт в мессенджере; иные сведения, указанные пользователем в формах Сайта, в переписке по электронной почте, в мессенджерах или при обращении в службу поддержки."
							: "full name; contact phone number; e-mail address; messenger contact; any other details the user provides through Site forms, e-mail correspondence, messengers or support requests."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Данные, собираемые автоматически:" : "Data collected automatically:"}</strong>{" "}
						{ru
							? "IP-адрес; тип браузера и операционной системы; файлы cookie; сведения о посещённых страницах, времени и географии визитов — с помощью систем веб-аналитики (в том числе Яндекс.Метрика и аналогичных сервисов)."
							: "IP address; browser and operating system type; cookies; information about visited pages, visit time and geography — collected through web analytics systems (including Yandex.Metrika and similar services)."}
					</li>
					<li className="legal-li">
						<strong>
							{ru ? "Данные, необходимые для заключения и исполнения договоров:" : "Data required to enter into and perform contracts:"}
						</strong>{" "}
						{ru
							? "сведения, необходимые для выставления чека в соответствии с режимом «Налог на профессиональный доход», идентификации плательщика и исполнения договора на оказание услуг."
							: "information required to issue a receipt under the “Professional Income Tax” regime, to identify the payer and to perform the services agreement."}
					</li>
				</ul>
				<p className="legal-p">
					{ru
						? "Оператор не обрабатывает специальные категории персональных данных, касающиеся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни (статья 10 ФЗ-152), а также биометрические персональные данные (статья 11 ФЗ-152), за исключением случаев, прямо предусмотренных законодательством РФ."
						: "The Operator does not process special categories of personal data concerning race, nationality, political opinions, religious or philosophical beliefs, health or intimate life (Article 10 of the Law), nor biometric personal data (Article 11 of the Law), except for cases expressly provided by the legislation of the Russian Federation."}
				</p>

				<h2 className="legal-h2">
					4. {ru ? "Цели обработки персональных данных" : "Purposes of processing"}
				</h2>
				<ul className="legal-list">
					<li className="legal-li">
						{ru
							? "Ответы на обращения пользователей, предоставление консультаций и поддержки."
							: "Responding to user enquiries, providing consultations and support."}
					</li>
					<li className="legal-li">
						{ru
							? "Заключение и исполнение договоров на оказание услуг NCAi, включая: консалтинг и внедрение систем на основе искусственного интеллекта (в том числе внедрение модели «Агентство в коробке»); обучение работе с AI-инструментами; предоставление доступа к электронным книгам и иным материалам; оказание услуг по подписке (подписные продукты NCAi)."
							: "Entering into and performing NCAi service agreements, including: consulting and implementation of AI-based systems (including the “Agency in a Box” model); AI tools training; providing access to e-books and other materials; subscription services (NCAi subscription products)."}
					</li>
					<li className="legal-li">
						{ru
							? "Оформление расчётов, выставление чеков и документов в соответствии с законодательством РФ о налогах и сборах."
							: "Settlements, issuing receipts and documents in accordance with Russian tax legislation."}
					</li>
					<li className="legal-li">
						{ru
							? "Направление информационных, образовательных и рекламных материалов (рассылка) — только при наличии отдельного согласия пользователя, с возможностью отказа в любой момент."
							: "Sending informational, educational and promotional materials (newsletters) — only with the user’s separate consent, with the possibility to opt out at any time."}
					</li>
					<li className="legal-li">
						{ru
							? "Улучшение работы Сайта, повышение удобства пользования, аналитика посещаемости и обеспечение безопасности."
							: "Improving the Site, enhancing usability, traffic analytics and ensuring security."}
					</li>
					<li className="legal-li">
						{ru
							? "Исполнение требований законодательства Российской Федерации."
							: "Compliance with the legislation of the Russian Federation."}
					</li>
				</ul>

				<h2 className="legal-h2">
					5. {ru ? "Правовые основания обработки" : "Legal grounds for processing"}
				</h2>
				<p className="legal-p">
					{ru
						? "Правовыми основаниями обработки ПД являются (статья 6 ФЗ-152):"
						: "The legal grounds for PD processing are (Article 6 of the Law):"}
				</p>
				<ul className="legal-list">
					<li className="legal-li">
						{ru
							? "согласие субъекта персональных данных на обработку его персональных данных;"
							: "the consent of the data subject to the processing of their personal data;"}
					</li>
					<li className="legal-li">
						{ru
							? "заключение и исполнение договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных;"
							: "conclusion and performance of a contract to which the data subject is a party, beneficiary or guarantor;"}
					</li>
					<li className="legal-li">
						{ru
							? "осуществление прав и законных интересов оператора либо третьих лиц, либо достижение общественно значимых целей, при условии, что при этом не нарушаются права и свободы субъекта персональных данных;"
							: "exercise of the rights and legitimate interests of the Operator or third parties, or achievement of socially significant goals, provided that the rights and freedoms of the data subject are not violated;"}
					</li>
					<li className="legal-li">
						{ru
							? "исполнение обязанностей (полномочий), возложенных на оператора законодательством Российской Федерации;"
							: "performance of duties (powers) imposed on the Operator by the legislation of the Russian Federation;"}
					</li>
					<li className="legal-li">
						{ru
							? "иные основания, предусмотренные ФЗ-152 и иными федеральными законами."
							: "other grounds provided by the Law and other federal laws."}
					</li>
				</ul>
				<p className="legal-p">
					{ru
						? "Согласие на обработку ПД даётся пользователем путём проставления отметок в соответствующих формах Сайта, нажатия кнопок согласия, направления обращения, а также самим фактом использования Сайта в объёме, определённом настоящей Политикой. Согласие может быть отозвано в любой момент в порядке, предусмотренном разделом 8 настоящей Политики."
						: "Consent to PD processing is given by ticking the relevant boxes in Site forms, pressing consent buttons, sending an enquiry, as well as by the mere fact of using the Site to the extent defined by this Policy. Consent may be withdrawn at any time in the manner provided in Section 8 of this Policy."}
				</p>

				<h2 className="legal-h2">
					6. {ru ? "Порядок и условия сбора, хранения и передачи персональных данных" : "Procedure and conditions for collection, storage and transfer of personal data"}
				</h2>
				<p className="legal-p">
					{ru
						? "Обработка ПД осуществляется с использованием средств автоматизации и без их использования. Оператор и иные лица, получившие доступ к ПД, обязаны не раскрывать третьим лицам и не распространять ПД без согласия субъекта, если иное не предусмотрено федеральным законом (статья 7 ФЗ-152)."
						: "PD is processed with and without the use of automation. The Operator and other persons who have gained access to PD are obliged not to disclose PD to third parties and not to distribute PD without the consent of the data subject, unless otherwise provided by federal law (Article 7 of the Law)."}
				</p>
				<p className="legal-p">
					{ru
						? "Оператор принимает необходимые и достаточные правовые, организационные и технические меры для защиты ПД, в том числе: назначает ответственного за организацию обработки ПД; утверждает правила доступа к ПД; применяет средства защиты информации, разграничение прав доступа, антивирусную защиту и резервное копирование; проводит оценку возможного вреда субъектам ПД."
						: "The Operator takes the necessary and sufficient legal, organizational and technical measures to protect PD, including: appointing a person responsible for organizing PD processing; approving PD access rules; applying information security tools, access control, antivirus protection and backup; assessing possible harm to data subjects."}
				</p>
				<p className="legal-p">
					{ru
						? "ПД хранятся в течение срока, необходимого для достижения целей обработки, либо в течение срока, установленного законодательством РФ, после чего уничтожаются или обезличиваются. Оператор не передаёт ПД третьим лицам, за исключением случаев, предусмотренных законодательством РФ, а также случаев передачи ПД лицам, обеспечивающим функционирование Сайта (хостинг-провайдер, сервисы веб-аналитики, платёжные сервисы, почтовые и мессенджер-сервисы), которые обрабатывают ПД на основании собственных политик и договоров и исключительно в объёме, необходимом для оказания соответствующих услуг."
						: "PD is stored for the period necessary to achieve the purposes of processing, or for the period established by the legislation of the Russian Federation, after which it is destroyed or depersonalized. The Operator does not transfer PD to third parties, except for cases provided by the legislation of the Russian Federation, as well as transfer to persons ensuring the operation of the Site (hosting provider, web analytics services, payment services, e-mail and messenger services), which process PD under their own policies and agreements and only to the extent necessary to provide the relevant services."}
				</p>

				<h2 className="legal-h2">
					7. {ru ? "Трансграничная передача персональных данных" : "Cross-border transfer of personal data"}
				</h2>
				<p className="legal-p">
					{ru
						? "Перед началом трансграничной передачи ПД Оператор убеждается в том, что иностранным государством, на территорию которого осуществляется передача, обеспечивается адекватная защита прав субъектов ПД. Перечень иностранных государств, не обеспечивающих адекватной защиты прав субъектов ПД, определяется уполномоченным органом по защите прав субъектов ПД (Роскомнадзором)."
						: "Before starting cross-border transfer of PD, the Operator verifies that the foreign state to whose territory the transfer is made ensures adequate protection of the rights of data subjects. The list of foreign states that do not ensure adequate protection of data subjects’ rights is determined by the authorized body for the protection of data subjects’ rights (Roskomnadzor)."}
				</p>
				<p className="legal-p">
					{ru
						? "Трансграничная передача ПД на территории иностранных государств, не обеспечивающих адекватной защиты прав субъектов ПД, осуществляется при наличии согласия субъекта ПД в письменной форме, за исключением случаев, предусмотренных законодательством РФ (статья 12 ФЗ-152)."
						: "Cross-border transfer of PD to the territories of foreign states that do not ensure adequate protection of data subjects’ rights is carried out with the written consent of the data subject, except for cases provided by the legislation of the Russian Federation (Article 12 of the Law)."}
				</p>
				<p className="legal-p">
					{ru
						? "При использовании иностранных сервисов (хостинг, веб-аналитика, облачные решения, платёжные сервисы) ПД могут обрабатываться на серверах, расположенных за пределами Российской Федерации, в объёме и на условиях, необходимых для функционирования Сайта, с соблюдением требований настоящего раздела."
						: "When foreign services are used (hosting, web analytics, cloud solutions, payment services), PD may be processed on servers located outside the Russian Federation, to the extent and on the terms necessary for the operation of the Site, subject to the requirements of this section."}
				</p>

				<h2 className="legal-h2">
					8. {ru ? "Заключительные положения" : "Final provisions"}
				</h2>
				<p className="legal-p">
					{ru
						? "Субъект ПД вправе (статья 14 ФЗ-152): получать информацию, касающуюся обработки его ПД, в том числе сведения об операторе, целях и правовых основаниях обработки, составе обрабатываемых данных и сроках их обработки; требовать уточнения, блокирования или уничтожения своих ПД; отозвать согласие на обработку ПД в любой момент; обжаловать действия (бездействие) Оператора в уполномоченном органе по защите прав субъектов ПД (Роскомнадзор) или в судебном порядке."
						: "The data subject has the right (Article 14 of the Law) to: obtain information concerning the processing of their PD, including information about the Operator, the purposes and legal grounds of processing, the composition of the processed data and the terms of processing; require the updating, blocking or destruction of their PD; withdraw consent to PD processing at any time; appeal the actions (inaction) of the Operator to the authorized body for the protection of data subjects’ rights (Roskomnadzor) or in court."}
				</p>
				<p className="legal-p">
					{ru
						? "Для реализации указанных прав пользователь вправе направить запрос на адрес электронной почты info@novator.vip (дополнительный канал связи — ilya.novitskii@yandex.ru). Запрос должен содержать сведения, позволяющие идентифицировать субъекта ПД, в соответствии со статьёй 14 ФЗ-152. Ответ на запрос направляется в срок, не превышающий 10 рабочих дней с момента получения запроса."
						: "To exercise these rights, the user may send a request to the e-mail address info@novator.vip (additional contact — ilya.novitskii@yandex.ru). The request must contain information allowing the identification of the data subject, in accordance with Article 14 of the Law. The response to the request is sent within no more than 10 business days from the receipt of the request."}
				</p>
				<p className="legal-p">
					{ru
						? "Актуальная редакция настоящей Политики всегда доступна по адресу https://ilya-novitsky.ru/privacy. Оператор вправе вносить изменения в Политику; изменения вступают в силу с момента их опубликования на Сайте. Продолжение использования Сайта после внесения изменений означает согласие пользователя с новой редакцией Политики."
						: "The current version of this Policy is always available at https://ilya-novitsky.ru/privacy. The Operator may amend the Policy; amendments take effect upon their publication on the Site. Continued use of the Site after amendments means the user agrees to the new version of the Policy."}
				</p>
				<p className="legal-p">
					{ru
						? "Во всём, что не урегулировано настоящей Политикой, Оператор и пользователь руководствуются законодательством Российской Федерации."
						: "In all matters not regulated by this Policy, the Operator and the user are governed by the legislation of the Russian Federation."}
				</p>

				<div className="legal-updated">
					{ru ? "Дата последнего обновления:" : "Last updated:"} 28 {ru ? "августа" : "August"} 2026
				</div>
			</div>
		</PageShell>
	);
}
