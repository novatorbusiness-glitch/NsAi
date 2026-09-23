import { redirect } from "next/navigation";

// B24U временно скрыт (партнёрство обсуждается). Редирект на /partners,
// чтобы прямая ссылка /b24u не открывала страницу. Вернуть, когда сделка подтвердится.
export default function Page() {
	redirect("/partners");
}
