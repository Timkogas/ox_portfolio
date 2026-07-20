export interface ProfiProjectInfo {
  brand: string;
  role: string;
  sphere: string;
  year: string;
}

export interface ProfiTitledText {
  title: string;
  text: string;
}

export interface ProfiTitledList {
  title: string;
  items: string[];
}

export interface ProfiData {
  projectInfo: ProfiProjectInfo;

  /** Intro column: Контекст / Задача / Результаты */
  context: ProfiTitledText;
  task: ProfiTitledText;
  results: ProfiTitledList;

  /** Dark composite — «Результат обновлённого интерфейса раздела Статистика» (teaser) */
  resultTeaser: string;

  /** Процесс — heading + intro paragraph, then specialist quotes, then outro paragraph */
  process: {
    title: string;
    intro: string;
    comments: string[];
    outro: string;
  };

  /** Dark composite — «Старый интерфейс раздела Статистика» with 4 baked-in annotations */
  oldInterface: {
    image: string;
    /** Clean phone (no annotations) shown on mobile with numbered markers */
    phone: string;
    notes: { text: string; x: number; y: number }[];
  };

  /** Решение — the reframed user request / hypothesis paragraph */
  solution: string;

  /** Dark composite — 1-я итерация (аналитические дашборды) */
  iteration1: string;

  /** Video / interviews mockup */
  video: {
    heading: string;
    image: string;
  };

  /** Paragraph before the final composite (переход ко 2-й итерации) */
  secondIteration: string;

  /** Dark composite — 2-я итерация, итоговый интерфейс */
  iteration2: string;

  /** Final card: outcome + next steps */
  conclusion: {
    text: string;
    nextStepsTitle: string;
    nextSteps: string[];
  };

  /** Decorative blob (paw illustration) overlapping the final card */
  blob: string;
}
