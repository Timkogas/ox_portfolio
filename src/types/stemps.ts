export interface StempsProjectInfo {
  brand: string;
  role: string;
  sphere: string;
  year: string;
}

export interface StempsTitledText {
  title: string;
  text: string;
}

export interface StempsTitledList {
  title: string;
  items: string[];
}

export interface StempsHypothesis {
  label: string;
  text: string;
}

export interface StempsData {
  projectInfo: StempsProjectInfo;

  /** Purple wordmark cover (hero band) */
  heroCover: string;

  /** Intro column: Контекст / Задача / Результаты */
  context: StempsTitledText;
  task: StempsTitledText;
  results: StempsTitledList;

  /** Top demo video (course constructor in action) */
  heroVideoId: string;

  /** Процесс — competitive analysis + CustDev */
  process: StempsTitledText;

  /** Blurred CustDev video-call screenshot */
  custdevImage: string;

  /** Target-audience quotes (Комментарий ЦА) */
  comments: string[];

  /** Решение — reframed business request / hypothesis */
  solution: string;

  /** Hypotheses that shaped the constructor architecture */
  hypotheses: StempsHypothesis[];
  /** Editor / courses screenshots shown inside the hypotheses section */
  hypothesisImages: { editor: string; courses: string };

  /** Text before the demo */
  videoIntro: string;
  /** Demo — editor screenshot (image 1) shown on a gray band */
  demoImage: string;

  /** Student mobile views — row of phone screens */
  students: {
    label: string;
    images: string[];
  };

  /** Детали — feedback templates + macbook/phone mockup */
  details: StempsTitledText & { image: string };

  /** Сертификаты — settings + macbook/phone mockup */
  certificates: { text: string; image: string };

  /** Closing line before the conclusion */
  moreDetails: string;

  /** Final card: outcome + next steps */
  conclusion: {
    text: string;
    nextStepsTitle: string;
    nextSteps: string[];
  };

  /** Decorative blob overlapping the final card */
  blob: string;
}
