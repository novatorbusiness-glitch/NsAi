import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "NCAi - Архитектор систем",
	description: "NcAi consulting site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
