# Blueprint сайта ilya-novitsky.ru

Чертёж проекта до каждого файла. Источник — шаг 15 плана «Сайт ilya-novitsky.ru — план перезапуска» (артефакт «Сайт Ильи»).
Здесь — то же дерево с фактическим статусом на 13.10.2026. Новое добавляется по дереву: строка → шаг → своя ветка → проверки → main.

Статусы: ✓ сделано · ◐ при росте (место заложено, делаем, когда понадобится) · ≠ сделано иначе, причина рядом и в DECISIONS.md.

```
ilya-novitsky.ru/
├── .github/workflows/
│   ├── deploy.yml            ✓ push в main → сборка → проверки → выкладка; упала проверка — сайт не выкладывается
│   └── check.yml             ✓ каждая ветка и PR: типы, сборка, проверки
├── docs/
│   ├── BLUEPRINT.md          ✓ этот файл
│   ├── DECISIONS.md          ✓ журнал решений
│   ├── SEO.md                ✓ запрос → страница, правила, план статей
│   ├── RELAUNCH.md           ✓ план и журнал пересборки 10.2026
│   └── archive/              ✓ старые документы NCAi как опора (SEO-аудит 21.09, спецификация, план миграции)
├── AGENTS.md                 ✓ правила для агентов: где что лежит, тон, запреты, порядок
├── content/                  ✓ всё, что читает человек, — отдельно от кода
│   ├── pages/
│   │   ├── home.ts           ✓ главная, блоки 1–10
│   │   ├── faq.ts            ✓ вопросы главной
│   │   ├── keisy.ts          ✓ К.1–К.5
│   │   ├── nastavnichestvo.ts✓ Н.1–Н.9 + «На выходе», программа 8 шагов / 52 подшага
│   │   ├── kak-my-rabotaem.ts✓ три шага работы (страница добавлена 13.10)
│   │   ├── blog.ts           ✓ тексты блога и финальные плашки статей
│   │   ├── book.ts           ✓ страница книги и оглавление
│   │   └── common.ts         ✓ общее: кнопки, подбор шага, cookie, 404, документы, шапка и подвал
│   ├── cases/                ✓ один файл = один кейс: okidelo, gaze, nezha-quest, vlinx (neuroflow не показываем)
│   ├── legal/                ✓ offer, privacy, consent (.md; ≠ .mdx — MDX не нужен)
│   ├── blog/                 ✓ 10 статей (.md с карточкой; старые 8 — переадресация на /blog)
│   └── book/                 ✓ 30 глав «Нейро-воронки», новое начало без жертвенности
├── functions/lead/           ◐ форма заявки с amoCRM — после запуска (сейчас заявки в Telegram и MAX)
├── public/
│   ├── fonts/                ✓ Manrope, JetBrains Mono — свои файлы, без Google
│   ├── images/site/          ✓ только настоящие экраны и фото
│   ├── og/                   ✓ превью 1200×630 для каждой страницы и статьи + manifest.json
│   ├── book/                 ✓ готовые главы (scripts/book)
│   ├── CNAME, google….html   ✓
│   └── favicon*, manifest    ≠ знак NCAi — решение Ильи 13.10; фирменный стиль отдельной задачей
├── scripts/
│   ├── og/generate_og.py     ✓ превью по заголовку страницы; готовые не перерисовывает
│   ├── check/links.mjs       ✓ битые ссылки и якоря
│   ├── check/redirects.mjs   ✓ каждый старый адрес ведёт на живую страницу
│   ├── check/seo.mjs         ✓ title, description, один H1, canonical, свежее превью, alt и размеры картинок
│   ├── check/budget.mjs      ✓ вес HTML, JS, CSS (gzip) не больше лимита
│   ├── book/                 ✓ сборка глав книги в public/book
│   ├── build-redirects.mjs   ≠ не нужен: переадресации строит маршрут src/app/[...from] из config/redirects.ts
│   └── optimize-images.mjs   ◐ WebP в нескольких размерах — когда картинок станет больше
└── src/
    ├── app/                  ✓ папка = адрес
    │   ├── layout.tsx        ✓ шрифты, метатеги, шаблон «%s · Илья Новицкий», Метрика после согласия, Person
    │   ├── page.tsx          ✓ / — только собирает блоки главной
    │   ├── not-found.tsx     ✓ 404 с дорогой на главную и разделы
    │   ├── kak-my-rabotaem/  ✓
    │   ├── keisy/            ✓   [slug]/ ◐ отдельные страницы кейсов — когда кейсов больше 6
    │   ├── nastavnichestvo/  ✓
    │   ├── blog/             ✓ список и [slug]   page/[n], tag/[tag] ◐ — когда статей больше 12 и 30
    │   ├── book/             ✓ страница книги; ≠ главы — готовые HTML в public/book (своя вёрстка и схемы)
    │   ├── offer, privacy, consent/ ✓
    │   ├── [...from]/        ✓ страницы-переадресации со старых адресов
    │   ├── sitemap.ts        ✓ собирает адреса сам: страницы, статьи, главы
    │   └── robots.ts         ✓ без устаревшей строки Host
    ├── components/
    │   ├── ui/               ✓ Rich (разметка текстов), JsonLd   Button, Section, Card… ◐
    │   ├── layout/           ✓ Header, Footer, CookieBanner, Goals, LegalPage, Redirect
    │   ├── home/             ✓ по файлу на блок + StepPicker
    │   ├── cases/            ✓ Hero, Products, System, Sales, Contact
    │   ├── mentor/           ✓ блоки Н.1–Н.9
    │   ├── process/          ✓ Hero, ServiceStep (один на три шага), MentorCta
    │   ├── blog/             ✓ ArticleBody, ArticleCard
    │   ├── book/             ✓ Hero, Toc
    │   └── lead/             ◐ форма заявки — вместе с functions/lead
    ├── config/
    │   ├── site.ts           ✓ имя, меню, контакты, реквизиты
    │   ├── prices.ts         ✓ цены и сроки — одна строка меняет цену на всём сайте
    │   ├── goals.ts          ✓ цели Метрики
    │   ├── redirects.ts      ✓ старый адрес → новый
    │   └── blog.ts           ✓ порядок статей, темы, даты
    ├── lib/
    │   ├── content.ts        ✓ чтение content/*.md с проверкой карточки
    │   ├── seo.ts            ✓ метатеги, превью, canonical, schema.org
    │   ├── typo.ts           ✓ неразрывные пробелы в числах
    │   ├── cases.ts, blog.ts, legal.ts ✓
    │   ├── analytics.ts      ✓ goal() → Метрика
    │   └── book-viz.ts       ✓ схемы для глав книги
    └── styles/
        ├── tokens.css        ✓ цвета, шрифты, радиусы
        └── base.css          ✓ блоки сайта
```

## Разметка schema.org (S8)

| Страница | Что размечено |
|---|---|
| все | Person (Илья) |
| / | Service с ценами шагов, FAQPage |
| /keisy | хлебные крошки, ItemList из CreativeWork (кейсы) |
| /nastavnichestvo | хлебные крошки, Service с ценой, FAQPage |
| /kak-my-rabotaem, /blog | хлебные крошки |
| /blog/… | Article (автор, дата, превью), хлебные крошки |
| /book | хлебные крошки, Book |

## Как добавить

- **Статью**: `content/blog/<slug>.md` + строка в `src/config/blog.ts` → `npm run build` → `npm run og` → `npm run build`.
- **Кейс**: `content/cases/<slug>.md` (поле `order` — место в списке, `homeBig` — показать на главной).
- **Старый адрес**: строка в `src/config/redirects.ts`.
- **Цену**: `src/config/prices.ts`.
- **Текст**: файл страницы в `content/pages/`. Разметка: `**жирный**`, `[текст](адрес)`, `{{без переноса}}`.
