// Подбор шага одним вопросом (блок 4а): главная и статьи блога.
export default function StepPicker({ id = "pick" }: { id?: string }) {
	return (
		<div className="pick-wrap" id={id}>
		<h3>Не знаете, с чего начать?</h3>
		<p className="sub">Выберите, что ближе к вашей ситуации, и я подскажу первый шаг. В Telegram или MAX напишите, какой вариант выбрали, и пару строк о задаче.</p>
		<div className="pick">
		<details><summary>Есть идея продукта, но пока ничего не сделано</summary><div className="ans"><p><b>Начните с тест-драйва.</b> Разберём идею: стоит ли её строить, для кого и на чём она будет зарабатывать. Если решите идти дальше, следующим шагом будет чертёж с прототипом.</p><a className="btn p" href="https://t.me/Ilya_novator" data-goal="pick_step" data-variant="1" target="_blank" rel="noopener">Написать в Telegram</a></div></details>
		<details><summary>Сайт и соцсети есть, а заявок мало или они теряются</summary><div className="ans"><p><b>Начните с тест-драйва на этой задаче.</b> Найду, где система теряет клиентов и деньги и что чинить первым.</p><a className="btn p" href="https://t.me/Ilya_novator" data-goal="pick_step" data-variant="2" target="_blank" rel="noopener">Написать в Telegram</a></div></details>
		<details><summary>Хочу навести порядок во всей цифровой части и расти</summary><div className="ans"><p><b>Вам подойдёт чертёж системы.</b> Соберём полную картину: что есть, чего не хватает и в каком порядке строить. Если сомневаетесь, можно сначала проверить меня на тест-драйве: его стоимость войдёт в чертёж.</p><a className="btn p" href="https://t.me/Ilya_novator" data-goal="pick_step" data-variant="3" target="_blank" rel="noopener">Написать в Telegram</a></div></details>
		<details><summary>Всё работает, но вести это некому</summary><div className="ans"><p><b>Можно начать сразу с ведения.</b> Возьму систему на себя: каждую неделю план, отчёт и решения на цифрах.</p><a className="btn p" href="https://t.me/Ilya_novator" data-goal="pick_step" data-variant="4" target="_blank" rel="noopener">Написать в Telegram</a></div></details>
		<details><summary>Хочу собрать продукт сам</summary><div className="ans"><p><b>Вам на наставничество.</b> Проведу по шагам, а собираете вы сами.</p><p className="under">80 000 ₽ в месяц</p><a className="btn s" href="/nastavnichestvo">Страница «Наставничество» →</a></div></details>
		</div>
		</div>
	);
}
