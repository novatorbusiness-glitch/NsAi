import { site } from "@/config/site";

// Призыв после блока 03 (как «Pair with ZCode» у z.ai): иконка, мысль, строка, кнопка справа.
export default function CtaBanner() {
	return (
		<section id="ctab" className="ctab-sec">
			<div className="wrap">
				<div className="ctab">
					<span className="ic" aria-hidden="true"><svg viewBox="100 50 350 375"><g transform="translate(24,-190) scale(1.15)"><path d="M100,505 V330 Q100,290 128,318 L262,478 Q300,520 305,468 V320" stroke="#fff" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M300,296 Q292,240 352,214 Q362,272 300,296 Z" fill="#cfeee3"/></g></svg></span>
					<div className="txt">
						<h3>Хватит собирать ИИ по кусочкам</h3>
						<p>Разберу вашу задачу, посчитаю эффект и скажу, с чего начинать</p>
					</div>
					<a className="btn p" href="#contact" data-goal="cta_start">Разобрать задачу бесплатно</a>
				</div>
			</div>
		</section>
	);
}
