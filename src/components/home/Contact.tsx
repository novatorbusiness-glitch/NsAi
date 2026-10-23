"use client";
import { useState } from "react";
import ContactNote from "@/components/ui/ContactNote";
import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { common } from "@content/pages/common";
import { goal } from "@/lib/analytics";
import { goals } from "@/config/goals";
import SectionHead from "@/components/ui/SectionHead";

// Разбор задачи (главная и «Как работаю в команде»): вопрос «где вы сейчас?» (выбор копируется для первого сообщения и уходит целью pick_step), Telegram и MAX.
export default function Contact({ num }: { num?: string }) {
	const c = home.contact;
	const [pick, setPick] = useState<number | null>(null);
	const choose = (i: number) => {
		setPick(i);
		goal(goals.pickStep, { variant: i + 1 });
		navigator.clipboard?.writeText(`Здравствуйте! ${c.options[i]}.`).catch(() => {});
	};
	return (
		<section id="contact" className="final">
			<div className="wrap">
				<div className="card final-card">
					<div>
						<SectionHead num={num ?? c.num} label={c.label} title={c.h2} lead={c.lead} />
						<p className="lbl">{c.ask}</p>
						<div className="chips" role="group" aria-label={c.ask}>
							{c.options.map((o, i) => <button type="button" key={o} className={pick === i ? "chip on" : "chip"} aria-pressed={pick === i} onClick={() => choose(i)}>{o}</button>)}
						</div>
						{pick !== null && <p className="cap" role="status">{c.copied}</p>}
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.telegram}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
						<p className="cap">{c.under}</p>
						<ContactNote />
					</div>
				</div>
			</div>
		</section>
	);
}
