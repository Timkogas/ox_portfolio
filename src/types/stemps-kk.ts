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

export interface EditorAnnotation {
  text: string;
  position: { x: number; y: number };
  width?: number;
  arrow?: {
    image: string;
    position: { x: number; y: number };
    width?: number;
  };
  /** Marker position on mobile (% relative to individual image) */
  mobileMarker?: { x: number; y: number; target?: "editor" | "panel" };
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
    panelOffset: { left: number; top: number };
  };
  editorAnnotations: EditorAnnotation[];
  structureText: string;
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
