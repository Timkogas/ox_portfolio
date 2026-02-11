export interface KasperskyProjectInfo {
  brand: string;
  role: string;
  sphere: string;
  year: string;
}

export interface KasperskyHypothesis {
  title: string;
  text: string;
  card: {
    position: { x: number; y: number };
    width?: number;
  };
  arrow: {
    image: string;
    position: { x: number; y: number };
    width?: number;
  };
}

export interface KasperskyDarkSection {
  image?: string;
  title?: string;
  /** Single Kinescope video (landscape) */
  videoId?: string;
  /** Multiple Kinescope videos side by side (portrait phones) */
  videoIds?: string[];
  /** Description inside the dark section (in a card) */
  innerDescription?: string;
  /** Description text that appears AFTER the dark section on white bg */
  afterDescription?: string;
  /** Highlighted text within afterDescription (shown in accent color) */
  afterHighlight?: string;
}

export interface KasperskyData {
  heroImage: string;
  projectInfo: KasperskyProjectInfo;
  context: {
    title: string;
    content: string;
  };
  process: {
    title: string;
    content: string;
  };
  hypotheses: {
    intro?: string;
    image: string;
    imageWidth?: number;
    items: KasperskyHypothesis[];
    caption: string;
    conclusion: string;
    arrowBetween?: {
      image: string;
      position: { x: number; y: number };
      width?: number;
    };
  };
  darkSections: KasperskyDarkSection[];
  results: {
    title: string;
    items: string[];
  };
  conclusion: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
}
