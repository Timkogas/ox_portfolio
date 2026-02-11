export interface StempsKKHypothesis {
  label: string;
  text: string;
}

export interface StempsKKMetric {
  title: string;
  value: string;
  change: string;
  direction: "up" | "down";
  count: number;
}

export interface StempsKKData {
  heroImage: string;
  videoId: string;
  task: {
    title: string;
    content: string;
  };
  process: {
    title: string;
    paragraphs: string[];
  };
  hypotheses: StempsKKHypothesis[];
  beforeEditor: string;
  detailsLabel: string;
  detailsImages: {
    editor: string;
    templatesPanel: string;
  };
  detailsAnnotations: {
    left: string;
    topRight: string;
    bottomCenter: string;
    bottomRight: string;
    structureText: string;
  };
  mobileLabel: string;
  mobileImages: string[];
  feedbackText: string;
  feedbackMockup: string;
  metrics: StempsKKMetric[];
  certificatesText: string;
  certificatesMockup: string;
  results: {
    title: string;
    items: string[];
  };
}
