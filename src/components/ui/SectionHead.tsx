import Rich from "@/components/ui/Rich";

// Заголовок блока (решение 13.10, формат финальной версии): метка «02 / Что получите», заголовок-мысль, лид до двух строк.
export default function SectionHead({ num, label, title, lead }: { num?: string; label?: string; title: string; lead?: string }) {
	return (
		<div className="section-head">
			{label && <p className="snum">{num && <b>{num}</b>}{num && <span className="sl">/</span>}{label}</p>}
			<h2><Rich t={title} /></h2>
			{lead && <p className="lead"><Rich t={lead} /></p>}
		</div>
	);
}
