# Портфолио — Оксана Бакулина

Сайт-портфолио продуктового дизайнера. React 19, TypeScript, Vite, Tailwind CSS v4.

---

## Быстрый старт

```bash
bun dev          # Запустить локально (http://localhost:5173)
bun run build    # Собрать для продакшена
bun run preview  # Посмотреть продакшен-сборку
```

---

## Структура проекта

```
src/
  pages/
    home/               -> Главная страница (/)
      home-data.ts        -- Все тексты и ссылки главной
      home-page.tsx       -- Компонент страницы
    stemps/             -> Кейс STEMPS (/stemps)
      stemps-data.ts      -- Тексты кейса
      stemps-page.tsx     -- Компонент страницы
      kk/               -> Конструктор курсов (/stemps/konstruktor-kursov)
        stemps-kk-data.ts -- Тексты подстраницы
        stemps-kk-page.tsx
    kaspersky/          -> Кейс Kaspersky (/kaspersky)
      kaspersky-data.ts   -- Тексты кейса
      kaspersky-page.tsx
    bureau-dushi/       -> Кейс Бюро Души (/bureau-dushi)
      bureau-dushi-data.ts -- Тексты кейса
      bureau-dushi-page.tsx
    drugoe/             -> Другие проекты (/drugoe)
      drugoe-data.ts      -- Тексты и видео
      drugoe-page.tsx
  components/
    page-header.tsx     -- Шапка с хлебными крошками + SEO-теги
    footer.tsx          -- Подвал (ссылка на Telegram)
    lazy-video.tsx      -- Компонент для встраивания видео Kinescope
  App.tsx               -- Маршрутизация (роуты)
  index.css             -- Шрифты, цвета, глобальные стили

public/
  fonts/                -- Шрифты Suisse Intl (otf)
  images/               -- Все картинки по папкам проектов
  favicon-*.png         -- Фавиконки
```

---

## Как менять контент

> **Главное правило:** весь текст находится в файлах `*-data.ts`. Менять нужно только их — компоненты (`*-page.tsx`) трогать не нужно.

---

### Главная страница

**Файл:** `src/pages/home/home-data.ts`

#### Имя и описание в шапке

```ts
hero: {
  name: "Оксана Бакулина, 25 лет",       // <-- Имя
  description: "Продуктовый дизайнер...",  // <-- Описание (текст под именем)
  imageUrl: "/images/home/hero/photo.jpg", // <-- Фото (заменить файл в public/images/home/hero/)
},
```

#### Ссылки (Резюме, LinkedIn, Telegram, E-mail)

```ts
links: [
  { label: "Резюме", href: "/images/home/Резюме_Бакулина_Оксана.pdf#zoom=50" },
  { label: "LinkedIn", href: "#" },                       // <-- заменить # на URL
  { label: "Telegram", href: "https://t.me/oxanasvrv" },
  { label: "E-mail", href: "mailto:oxanasuvorova99@yandex.ru" },
],
```

- **Резюме:** Положить PDF в `public/images/home/` и обновить путь в `href`
- **LinkedIn:** Заменить `"#"` на URL профиля
- **E-mail:** Изменить адрес после `mailto:`

#### Проекты на главной (карточки)

```ts
projects: [
  {
    id: "stemps",
    title: "STEMPS -- корпоративный университет",  // <-- Название под карточкой
    images: [                                       // <-- Обложки (в public/images/home/projects/)
      { src: "/images/home/projects/stemps-1.png", position: "center" },
      { src: "/images/home/projects/stemps-2.png", position: "left" },
    ],
    href: "/stemps",                                // <-- Куда ведёт клик
  },
],
```

- `position`: `"center"`, `"left"` или `"right"` -- расположение картинки в карточке

---

### Кейс STEMPS

**Файл:** `src/pages/stemps/stemps-data.ts`

#### Информация о проекте

```ts
projectInfo: {
  brand: "STEMPS",
  role: "продуктовый дизайнер",
  sphere: "EdTech, B2B, B2C",
  year: "август 2023 -- по настоящее время",
},
```

#### Контекст и процесс

```ts
context: {
  title: "Контекст",
  content: "Текст описания контекста проекта...",
},
process: {
  title: "Процесс",
  content: "Текст описания процесса...",
},
```

#### Боли пользователей

```ts
pains: {
  title: "Боли",
  items: [
    { title: "Название боли", description: "Описание проблемы" },
    // Добавить или удалить элементы
  ],
},
```

#### Скриншоты с ноутбуком

```ts
laptops: [
  {
    image: "/images/stemps/laptop-1-constructor.png",  // <-- Скриншот
    title: "Конструктор курсов",                       // <-- Заголовок
    description: "раздел для запуска обучения...",      // <-- Описание
    role: "полный цикл -- от исследования до релиза",  // <-- Роль
  },
],
```

#### Слайдер (карусель, автопрокрутка 10 сек)

```ts
slider: [
  {
    image: "/images/stemps/slider-1-my-courses.png",
    title: "Мои курсы",
    description: "описание раздела...",
    role: "полный цикл...",
  },
  // Добавить/удалить слайды
],
```

#### Результаты

```ts
results: {
  title: "Результат",
  items: [
    "Текст первого достижения",
    "Текст второго достижения",
  ],
},
```

---

### Кейс STEMPS -- Конструктор курсов

**Файл:** `src/pages/stemps/kk/stemps-kk-data.ts`

#### Видео

```ts
videoId: "rfy4Bvj7VWPdTseVCQqFmK",  // <-- ID видео на Kinescope (см. раздел "Видео" ниже)
```

#### Гипотезы

```ts
hypotheses: [
  { label: "Гипотеза:", text: "Текст гипотезы..." },
],
```

#### Метрики

```ts
metrics: [
  {
    title: "Название метрики",
    value: "93%",
    change: "+15%",
    direction: "up",   // "up" -- зелёный, "down" -- красный
    count: 168,
  },
],
```

---

### Кейс Kaspersky

**Файл:** `src/pages/kaspersky/kaspersky-data.ts`

#### Информация о проекте

```ts
projectInfo: {
  brand: "Kaspersky",
  role: "единственный дизайнер на проекте",
  sphere: "e-commerce, B2C",
  year: "июнь 2025",
},
```

#### Гипотезы

```ts
hypotheses: {
  image: "/images/kaspersky/phones.png",
  items: [
    {
      title: "Гипотеза 1 -- ...",
      text: "Текст гипотезы...",
    },
  ],
  caption: "Продолжение лонгрида из функций",  // <-- Текст кнопки разворачивания
  conclusion: "Текст после гипотез...",
},
```

#### Тёмные секции (видео/скриншоты)

```ts
darkSections: [
  {
    image: "/images/kaspersky/screen.png",        // <-- Скриншот (опционально)
    videoId: "97cDaY2kMm8nHdWmRy8R4B",           // <-- Одно видео (опционально)
    videoIds: ["id1", "id2", "id3"],              // <-- Несколько видео рядом (опционально)
    innerDescription: "Текст описания...",
    afterDescription: "Текст после...",
    afterHighlight: "жирная часть текста",
  },
],
```

---

### Кейс Бюро Души

**Файл:** `src/pages/bureau-dushi/bureau-dushi-data.ts`

#### Блоки структуры

```ts
structure: {
  blocks: [
    {
      title: "Название блока",
      text: "Описание блока...",
      image: "/images/bureau-dushi/services.png",
    },
  ],
},
```

#### Проблемы и решения

```ts
problemSolutions: [
  {
    problem: "Текст проблемы...",
    solution: "Текст решения...",
  },
],
```

#### Видео и телефоны (тёмный блок)

```ts
darkBlock: {
  videoId: "t6X47sqTJhW5NHV877sFfc",             // <-- Видео Kinescope
  phoneImages: [
    "/images/bureau-dushi/phone-1.png",
    "/images/bureau-dushi/phone-2.png",
    "/images/bureau-dushi/phone-3.png",
  ],
},
```

---

### Другие проекты

**Файл:** `src/pages/drugoe/drugoe-data.ts`

```ts
projects: [
  {
    title: "Название проекта",
    titleMuted: "Учебное",                          // <-- Подзаголовок (серый)
    videoId: "sTDSmHw29QX1HoHKCq6xbX",             // <-- Видео Kinescope
  },
],
```

---

## Как менять видео (Kinescope)

Все видео хостятся на [Kinescope](https://kinescope.io). Чтобы заменить:

1. Загрузить новое видео на kinescope.io
2. Скопировать ID из URL: `https://kinescope.io/embed/rfy4Bvj7VWPdTseVCQqFmK` -> ID = `rfy4Bvj7VWPdTseVCQqFmK`
3. Вставить ID в нужное поле `videoId` в data-файле

**Где какие видео:**

| Страница | Файл | Поле |
|----------|------|------|
| STEMPS КК (hero) | `stemps-kk-data.ts` | `videoId` |
| STEMPS КК (внизу) | `stemps-kk-page.tsx:279` | `videoId="4vGeVCoA..."` |
| Kaspersky | `kaspersky-data.ts` | `darkSections[].videoId` или `videoIds` |
| Бюро Души | `bureau-dushi-data.ts` | `darkBlock.videoId` |
| Другое | `drugoe-data.ts` | `projects[].videoId` |

---

## Как менять картинки

1. Положить новую картинку в `public/images/<название-проекта>/`
2. Обновить путь в соответствующем data-файле

**Рекомендуемые размеры:**

| Тип | Размер |
|-----|--------|
| Скриншоты с ноутбуком | 1702 x 1073 px (или больше для Retina) |
| Hero-баннеры | 1440 x 268 px |
| Мобильные скриншоты | 750 x 1624 px |
| Фото команды | 690 x 460 px |

---

## SEO

**Глобальные мета-теги:** `index.html` -- title, description, og:image

**Мета-теги страниц:** задаются через `PageHeader` в каждой `*-page.tsx`:

```tsx
<PageHeader
  title="Заголовок для SEO"
  description="Описание для поисковиков"
/>
```

---

## Шрифты

**Suisse Intl** (файлы в `public/fonts/`):

| Файл | Вес | Использование |
|------|-----|---------------|
| SuisseIntl-Regular.otf | 400 | Основной текст |
| SuisseIntl-Medium.otf | 500 | Акцентный текст |
| SuisseIntl-SemiBold.otf | 600 | Заголовки |
| SuisseIntl-Bold.otf | 700 | Жирные заголовки |

Подключение: `src/index.css` через `@font-face`.

---

## Подвал (Footer)

**Файл:** `src/components/footer.tsx`

Текст и Telegram-ссылка захардкожены в компоненте:
- Текст: `"буду рада обсудить детали и ответить на вопросы"`
- Telegram: `https://t.me/oxanasvrv`

---

## Деплой

Настроен Cloudflare Pages (`wrangler.jsonc`). Для Vercel:

1. Подключить репо на [vercel.com](https://vercel.com)
2. Build Command: `bun run build`
3. Output Directory: `dist`

---

## Специальные символы в текстах

| Символ | Код | Назначение |
|--------|-----|-----------|
| Неразрывный пробел | `\u00A0` | Не даёт перенести слово на новую строку |
| Неразрывный дефис | `\u2011` | Не даёт разорвать "e-commerce" |
| Перенос строки | `\n` | Принудительный перенос |
| Длинное тире | -- | Типографское тире |
