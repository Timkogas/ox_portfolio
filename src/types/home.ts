export interface Hero {
  name: string;
  description: string;
  imageUrl: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  position: "center" | "left" | "right";
}

export interface Project {
  id: string;
  title: string;
  image?: string;
  images?: ProjectImage[];
  href: string;
}

export interface HomeData {
  hero: Hero;
  links: Link[];
  projects: Project[];
}
