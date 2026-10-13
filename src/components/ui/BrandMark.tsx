// Фирменный значок «N с лепестком» (знак NCAi, решение Ильи 13.10). Буква — цвет текста, лепесток — фирменный зелёный.
// Источник геометрии — scripts/brand/mark.py.
export default function BrandMark({ size = 24 }: { size?: number }) {
	return (
		<svg className="bmark" viewBox="100 50 350 375" height={size} width={Math.round((size * 350) / 375)} aria-hidden="true">
			<g transform="translate(24,-190) scale(1.15)">
				<path d="M100,505 V330 Q100,290 128,318 L262,478 Q300,520 305,468 V320" stroke="currentColor" strokeWidth={40} strokeLinecap="round" strokeLinejoin="round" fill="none" />
				<path d="M300,296 Q292,240 352,214 Q362,272 300,296 Z" fill="var(--acc)" />
			</g>
		</svg>
	);
}
