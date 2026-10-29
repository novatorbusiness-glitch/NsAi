// Цены и сроки — меняются одной строкой на всём сайте (тексты в content/ берут их отсюда).
export const prices = {
	testDrive: { price: "40 000 ₽", term: "4 рабочих дня" },
	blueprint: { price: "120 000 ₽", term: "срок по задаче" }, // срок на сайте не показываем (решение Ильи 24.10), в оферте — свой
	management: { price: "150 000 ₽", term: "3 месяцев" },
	consult: { price: "15 000 ₽", term: "90 минут" },
	setup: { price: "90 000 ₽", term: "по смете" },
	dev: { price: "50 000 ₽", term: "срок по задаче" },
} as const;
