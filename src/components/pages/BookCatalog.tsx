"use client";

import type { CSSProperties } from "react";
import { BOOKS } from "@/lib/books";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Каталог книг (стиль exnihilo.life/knigi): заголовок + карточка книги
// с обложкой, меткой, описанием и CTA «Читать →» на первую подглаву.
export default function BookCatalog() {
	const { t } = useLang();

	return (
		<PageShell>
			<div className="w book-index-page">
				<p className="lb">{t("book.catalog")}</p>
				<h1 className="book-index-title">{t("book.catalog")}</h1>
				<p className="book-index-subtitle" style={{ maxWidth: 640 }}>
					{t("book.catalogSub")}
				</p>

				{/* Каталог с обложками */}
				<div className="book-catalog">
					{BOOKS.map((book) => (
						<a
							key={book.slug}
							href={book.href}
							className="book-card"
							style={{ "--accent": book.accent } as CSSProperties}
						>
							<div className="book-cover-wrap">
								<img
									src={book.cover}
									alt={t(book.titleKey)}
									className="book-cover"
									width={300}
									height={420}
									loading="lazy"
								/>
							</div>
							<div className="book-card-body">
								<span className="book-card-badge">{t(book.badgeKey)}</span>
								<h2 className="book-card-title">{t(book.titleKey)}</h2>
								<p className="book-card-sub">{t(book.subKey)}</p>
								<span className="book-card-cta">{t("book.read")}</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</PageShell>
	);
}
