import Rich from "@/components/ui/Rich";

// Заголовок блока: метка «Что получите», заголовок-мысль, лид до двух строк. Номера блоков не показываем (решение Ильи 23.10), num остаётся в контенте для порядка.
export default function SectionHead({ label, title, lead }: { num?: string; label?: string; title: string; lead?: string }) {
	return (
		<div className="section-head">
			{label && <p className="snum">{label}</p>}
			<h2><Rich t={title} /></h2>
			{lead && <p className="lead"><Rich t={lead} /></p>}
		</div>
	);
}
