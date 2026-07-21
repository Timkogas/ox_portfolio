const NBSP = " ";

// Короткие слова (предлоги, союзы, частицы, местоимения), которые нельзя
// оставлять висеть в конце строки — после них ставим неразрывный пробел.
const SHORT_WORDS = [
  "чтобы", "около", "после", "перед", "между", "через", "кроме",
  "если", "или", "изо", "обо", "ото", "над", "под", "при", "про",
  "без", "для", "как", "чем", "что", "меж", "уже",
  "во", "вне", "вы", "да", "до", "же", "за", "из", "ко", "ли",
  "мы", "на", "не", "ни", "но", "об", "он", "от", "по", "со", "то", "ты", "уж",
  "а", "в", "и", "к", "о", "с", "у", "я",
];

// Слова длиннее — раньше в альтернации, чтобы совпадали целиком.
const PATTERN = [...SHORT_WORDS].sort((first, second) => second.length - first.length).join("|");

// Граница слева (начало строки, пробел, открывающая кавычка или скобка) — через
// lookbehind, чтобы соседние короткие слова обрабатывались подряд. Дефис в класс
// не входит: иначе «Что-то», «из-за», «кто-то» ломались бы по второй части.
// Справа — обычный пробел, который и заменяем на неразрывный.
const HANGING = new RegExp(`(?<=^|[\\s(«"„'])(${PATTERN}) `, "giu");

export const nbsp = (text: string): string => text.replace(HANGING, `$1${NBSP}`);

const walk = (value: unknown): unknown => {
  if (typeof value === "string") return nbsp(value);
  if (Array.isArray(value)) return value.map(walk);
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, walk(val)]));
  }
  return value;
};

// Рекурсивно проставляет неразрывные пробелы во всех строках структуры,
// сохраняя её форму. Пути к картинкам и ссылки не содержат пробелов после
// коротких слов, поэтому остаются нетронутыми.
export function typo<T>(value: T): T;
export function typo(value: unknown): unknown {
  return walk(value);
}
