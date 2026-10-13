"use client";
import { useState } from "react";

// Кнопка «Раскрыть всю программу»: открывает и закрывает все подшаги разом.
export default function ProgramToggle() {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		const next = !open;
		document.querySelectorAll<HTMLDetailsElement>("#path details.sub").forEach((d) => (d.open = next));
		setOpen(next);
	};
	return (
		<button className="btn s allsteps" type="button" onClick={toggle}>
			{open ? "Свернуть программу" : "Раскрыть всю программу"}
		</button>
	);
}
