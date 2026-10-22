import { razbor } from "@content/pages/razbor";
import Funnel from "@/components/razbor/Funnel";

// Превью примера аудита для главной и шага «Аудит» (16.10): как MapPreview, ведёт на /primer-razbora.
export default function RazborPreview({ compact }: { compact?: boolean }) {
	const t = razbor.preview;
	return (
		<a className={`mpv rzp${compact ? " c" : ""}`} href="/primer-audita">
			<div className="mpv-t">
				<p className="lbl">{t.label}</p>
				<h3>{compact ? t.title : t.titleStep}</h3>
				{!compact && <p>{t.text}</p>}
				<span className="btn s">{t.button}</span>
			</div>
			<div className="rzp-v" aria-hidden="true"><Funnel mini /></div>
		</a>
	);
}
