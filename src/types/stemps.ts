export interface ProjectInfo {
  brand: string;
  role: string;
  sphere: string;
  year: string;
}

export interface TextSection {
  title: string;
  content: string;
}

export interface PainItem {
  title: string;
  description: string;
}

export interface Pains {
  title: string;
  items: PainItem[];
}

export interface ClientType {
  title: string;
  description: string;
  badges: string[];
}

export interface Clients {
  title: string;
  types: ClientType[];
}

export interface Structure {
  content: string;
}

export interface Laptop {
  image: string;
  title: string;
  description: string;
  role: string;
}

export interface Slide {
  image: string;
  title: string;
  description: string;
  role: string;
}

export interface Results {
  title: string;
  items: string[];
}

export interface ArrowConfig {
  position: { x: number; y: number };
  direction: "left" | "right";
  width?: number; // percentage of container width
}

export interface TextPosition {
  position: { x: number; y: number };
}

export interface BetweenWorkImage {
  src: string;
  alt: string;
  caption: string;
  arrow?: ArrowConfig;
  text?: TextPosition;
}

export interface BetweenWork {
  title: string;
  images: BetweenWorkImage[];
}

export interface StempsData {
  breadcrumbs: string;
  heroImage: string;
  projectInfo: ProjectInfo;
  context: TextSection;
  process: TextSection;
  pains: Pains;
  clients: Clients;
  structure: Structure;
  laptops: Laptop[];
  slider: Slide[];
  results: Results;
  betweenWork: BetweenWork;
}
