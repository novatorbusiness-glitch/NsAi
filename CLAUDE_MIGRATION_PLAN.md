# План переноса Claude изменений без искажений

## 1) Эталон источника
- Источник истины: .claude/worktrees/gifted-diffie-23742a
- Цель: перенести split intro/prologue и согласовать роутинг/ссылки/стили с текущим root-проектом

## 2) Ключевое расхождение сейчас
- В root есть один intro файл: content/book/00-vvedenie.mdx
- В эталоне есть split intro:
  - content/book/00-a-znakomstvo.mdx
  - content/book/00-b-prolog.mdx
- В root ссылки на главы уже заданы в старых длинных slug, но файлов с такими именами в root нет

## 3) Матрица соответствия slug (эталон -> текущий root)
- 00-vvedenie -> 00-vvedenie
- 1-1-kognitivnye-lovushki -> 1-1-lovushki
- 1-2-nejrokopiraiting -> 1-2-nejrokopirajting
- 1-3-lid-magnit -> 1-3-lid-magnit
- 1-4-vizualnye-stimuly -> 1-4-vizualnye-stimuly
- 2-1-produktovaya-matrica -> 2-1-produktovaya-matrica
- 2-2-anatomiya-voronki -> 2-2-anatomiya-voronki
- 2-3-arhitektura-voronki -> 2-3-arhitektura-voronki
- 2-4-finalnaya-sborka -> 2-4-finalnaya-sborka
- 3-1-fiziologiya-uderzhaniya -> 3-1-uderzhanie-vnimaniya
- 3-2-chetyre-elementa-doveriya -> 3-2-doverie
- 3-3-cepochki-kasanij -> 3-3-cepochki-kasanij
- 3-4-usilenie-ohvatov -> 3-4-ohvaty
- 3-5-ai-kopiraiter -> 3-5-ai-kopirajter
- 4-1-anatomiya-kreativa -> 4-1-kreativ
- 4-2-shest-stimulov -> 4-2-stimuly
- 4-3-virusnaya-mehanika -> 4-3-memy
- 4-4-organicheskij-trafik -> 4-4-blog-kak-magnit
- 4-5-poisk-segmentaciya -> 4-5-istochniki-trafika
- 4-6-analitika-trafika -> 4-6-pribornaya-panel
- 4-7-ai-kreativy -> 4-7-ai-konvejer
- 5-1-algoritm-vs-chelovek -> 5-1-sistemy-prodazh
- 5-2-stek-avtomatizacii -> 5-2-ekzokorteks
- 5-3-vebinarnyj-dvigatel -> 5-3-avtopilot-vebinara
- 5-4-audit-voronki -> 5-4-analitika-voronki
- 5-5-ai-v-prodazhah -> 5-5-ai-assistent
- 6-1-cifrovye-sotrudniki -> 6-1-cifrovye-sotrudniki
- 6-2-razrabotka-bez-programmistov -> 6-2-novaya-razrabotka

## 4) Что переносим в первую очередь
1. Intro split файлы:
   - content/book/00-a-znakomstvo.mdx
   - content/book/00-b-prolog.mdx
2. Книжную обвязку:
   - src/lib/book-data.ts
   - src/app/book/page.tsx
   - src/components/layout/Footer.tsx
   - src/styles/components.css
3. Слой алиасов в src/app/book/[slug]/page.tsx для обратной совместимости

## 5) Защита от поломок
- Не удаляем текущие root-файлы контента
- Добавляем алиасы slug -> текущие root-файлы
- После правок: build + локальная проверка book маршрутов + deploy

## 6) Проверка после переноса
- /book показывает 2 карточки: Знакомство и Пролог
- /book/00-a-znakomstvo и /book/00-b-prolog открываются
- Ссылки из индекса/футера ведут на существующие маршруты
- Не ломаются существующие маршруты /book/00-vvedenie и старые алиасы
