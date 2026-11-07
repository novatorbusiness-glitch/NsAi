// Полоса цифр после метаморфозы: доказательства истории одной строкой (07.11).
const items = [
	{ n: "300+", t: "проектов агентства", s: "за 5 лет" },
	{ n: "631", t: "сделка закрыта", s: "за последние 3,5 года" },
	{ n: "15", t: "отраслей клиентов", s: "от IT до салонов" },
	{ n: "204", t: "навыка в моей среде", s: "8 отделов работают сейчас" },
];
export default function Numbers() {
	return (
		<section className="nums" aria-label="Цифры моей работы">
			<div className="wrap">
				<p className="nums-lbl">Цифры моей работы</p>
				<div className="nums-row">
					{items.map((x) => (
						<div className="nums-i" key={x.t}>
							<b>{x.n}</b>
							<span>{x.t}</span>
							<small>{x.s}</small>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
