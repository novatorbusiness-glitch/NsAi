// Цены и сроки — меняются одной строкой на всём сайте (тексты в content/ берут их отсюда).
export const prices = {
	testDrive: { price: "40 000 ₽", term: "3–4 рабочих дня" },
	blueprint: { price: "120 000 ₽", term: "2–3 недели" },
	management: { price: "150 000 ₽", term: "3 месяцев" },
	mentor: { price: "80 000 ₽", term: "около двух месяцев" },
} as const;
