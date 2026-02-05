export interface Hero {
  name: string;
  description: string;
  imageUrl: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  href: string;
}

export interface HomeData {
  hero: Hero;
  links: Link[];
  projects: Project[];
}
