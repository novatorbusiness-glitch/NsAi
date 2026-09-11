"use client";

import { useEffect } from "react";

/**
 * /consulting слился с /raspakovka — единый оффер (распаковка + подписка)
 * вместо двух конкурирующих продуктов на одном сайте.
 */
export default function ConsultingRedirect() {
	useEffect(() => {
		window.location.replace("/raspakovka");
	}, []);

	return (
		<div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4rem 1.5rem" }}>
			<p>
				Эта страница переехала —{" "}
				<a href="/raspakovka">открыть распаковку NCAi</a>
			</p>
		</div>
	);
}
