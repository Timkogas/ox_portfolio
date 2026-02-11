export interface DrugoeProject {
  title: string;
  titleMuted?: string;
  videoId: string;
  images?: string[];
}

export interface DrugoeData {
  projects: DrugoeProject[];
}
