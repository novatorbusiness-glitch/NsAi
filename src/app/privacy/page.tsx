"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Политика конфиденциальности (RU/EN).
export default function PrivacyPage() {
	const { lang } = useLang();
	const ru = lang === "ru";

	return (
		<PageShell>
			<div className="w page-hero legal-shell">
				<p className="lb">{ru ? "Правовое" : "Legal"}</p>
				<h1 className="page-h1">{ru ? "Политика конфиденциальности" : "Privacy Policy"}</h1>
				<p className="page-sub">
					{ru
						? "Как сайт ilya-novitsky.ru (NCAi) собирает, использует и защищает персональные данные."
						: "How ilya-novitsky.ru (NCAi) collects, uses and protects personal data."}
				</p>

				<h2 className="legal-h2">1. {ru ? "Общие положения" : "General provisions"}</h2>
				<p className="legal-p">
					{ru
						? "Настоящая Политика определяет порядок обработки персональных данных посетителей сайта ilya-novitsky.ru (далее — Сайт), принадлежащего Илье Новицкому (далее — Оператор). Используя Сайт, вы соглашаетесь с условиями настоящей Политики."
						: "This Policy defines how personal data of visitors to ilya-novitsky.ru (the Site), owned by Ilya Novitsky (the Operator), is processed. By using the Site you agree to the terms of this Policy."}
				</p>

				<h2 className="legal-h2">2. {ru ? "Какие данные мы собираем" : "What data we collect"}</h2>
				<ul className="legal-list">
					<li className="legal-li">
						<strong>{ru ? "Данные, которые вы передаёте сами:" : "Data you provide:"}</strong>{" "}
						{ru
							? "имя, контактный телефон, email, мессенджер — при обращении через формы, Telegram или почту."
							: "name, phone, email, messenger — when contacting us via forms, Telegram or email."}
					</li>
					<li className="legal-li">
						<strong>{ru ? "Данные, собираемые автоматически:" : "Automatically collected:"}</strong>{" "}
						{ru
							? "IP-адрес, тип браузера, страницы посещения, время — для аналитики и безопасности."
							: "IP address, browser type, visited pages, time — for analytics and security."}
					</li>
				</ul>

				<h2 className="legal-h2">3. {ru ? "Цели обработки" : "Purposes of processing"}</h2>
				<ul className="legal-list">
					<li className="legal-li">{ru ? "Ответы на обращения и консультации." : "Responding to enquiries."}</li>
					<li className="legal-li">{ru ? "Заключение и исполнение договоров (консалтинг, обучение)." : "Contract performance (consulting, training)."}</li>
					<li className="legal-li">{ru ? "Улучшение работы Сайта и аналитика." : "Improving the Site and analytics."}</li>
					<li className="legal-li">{ru ? "Рассылка материалов — только с вашего согласия." : "Sending materials — only with your consent."}</li>
				</ul>

				<h2 className="legal-h2">4. {ru ? "Хранение и защита" : "Storage and protection"}</h2>
				<p className="legal-p">
					{ru
						? "Данные хранятся на защищённых ресурсах, доступ к ним ограничен. Мы не передаём данные третьим лицам, кроме случаев, предусмотренных законом, и кроме сервисов, которые технически участвуют в работе Сайта (хостинг, аналитика, платёжные системы) и обрабатывают данные на основании собственных политик."
						: "Data is stored on protected resources with restricted access. We do not share data with third parties except where required by law, and except for services that technically participate in the Site (hosting, analytics, payment systems) which process data under their own policies."}
				</p>

				<h2 className="legal-h2">5. {ru ? "Ваши права" : "Your rights"}</h2>
				<p className="legal-p">
					{ru
						? "Вы можете запросить: уточнение данных, их удаление, отзыв согласия на обработку. Для этого напишите на ilya.novitskii@yandex.ru. Сайт не обрабатывает данные несовершеннолетних без согласия родителей."
						: "You may request: correction, deletion, or withdrawal of consent. Write to ilya.novitskii@yandex.ru. The Site does not process data of minors without parental consent."}
				</p>

				<h2 className="legal-h2">6. {ru ? "Файлы cookie" : "Cookies"}</h2>
				<p className="legal-p">
					{ru
						? "Сайт может использовать cookie для запоминания языка и настроек. Вы можете отключить cookie в браузере — это не помешает чтению книг и статей."
						: "The Site may use cookies to remember language and preferences. You can disable cookies in your browser — this will not prevent reading books and articles."}
				</p>

				<h2 className="legal-h2">7. {ru ? "Изменения политики" : "Policy changes"}</h2>
				<p className="legal-p">
					{ru
						? "Политика может обновляться. Актуальная версия всегда доступна на этой странице."
						: "This Policy may be updated. The current version is always available on this page."}
				</p>

				<div className="legal-updated">
					{ru ? "Последнее обновление:" : "Last updated:"} 28 {ru ? "августа" : "August"} 2026
				</div>
			</div>
		</PageShell>
	);
}
