import Rich from "@/components/ui/Rich";
import { common } from "@content/pages/common";

// Строка под кнопками «написать» во всех формах: ник Telegram, телефон MAX, политика и оферта.
export default function ContactNote({ className = "under cnote" }: { className?: string }) {
	return <p className={className}><Rich t={common.contactNote} /></p>;
}
