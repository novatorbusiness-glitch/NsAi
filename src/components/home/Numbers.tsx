// Полоса цифр сразу после первого экрана: лаконичная строка фактов (07.11).
const items = [
	{ n: "4 100+", t: "сделок разобрано в CRM" },
	{ n: "1 000+", t: "роликов проанализировано" },
	{ n: "1 300+", t: "комментариев клиентов изучено" },
	{ n: "73", t: "экрана прототипа до кода" },
	{ n: "47", t: "страниц этого сайта" },
];
export default function Numbers() {
	return (
		<section className="nums" aria-label="Цифры из моей работы">
			<div className="wrap">
				<p className="nums-lbl">Цифры из моей работы</p>
				<div className="nums-row">
					{items.map((x) => (
						<div className="nums-i" key={x.t}>
							<b>{x.n}</b>
							<span>{x.t}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
