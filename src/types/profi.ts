export interface ProfiProjectInfo {
  brand: string;
  role: string;
  sphere: string;
  year: string;
}

export interface ProfiTextSpan {
  text: string;
  /** Highlighted span shown in accent blue */
  accent?: boolean;
}

export interface ProfiTestimonial {
  quote: string;
  /** Author line, e.g. "Александр, электрика" */
  author?: string;
  /** Initial inside the author avatar; omit for a plain (letterless) avatar */
  initial?: string;
  /** Stack of avatars when there is no single author; null = plain avatar */
  avatars?: (string | null)[];
}

export interface ProfiResultBlock {
  title: string;
  items: string[];
}

export interface ProfiData {
  projectInfo: ProfiProjectInfo;
  context: {
    title: string;
    paragraphs: string[];
  };
  process: {
    title: string;
    spans: ProfiTextSpan[];
  };
  /** Dark section composite (phone «Моя статистика» + arrows + annotations) */
  darkImage: string;
  /** Annotation texts (shown as a list on mobile where the composite is too small) */
  darkNotes: string[];
  /** Paragraph on white after the dark section */
  firstIteration: string;
  /** First-iteration composite (analytics phones collage) */
  chartsImage: string;
  /** Video / person mockup */
  video: {
    heading: string;
    image: string;
  };
  testimonials: ProfiTestimonial[];
  /** Paragraphs after testimonials */
  secondIteration: string[];
  /** Second-iteration composite (finance phones) */
  financeImage: string;
  /** Final "Таким образом" summary list */
  summary: {
    title: string;
    items: string[];
  };
  status: {
    text: string;
    blocks: ProfiResultBlock[];
  };
  /** Decorative blob image (final illustration) */
  blob: string;
}
