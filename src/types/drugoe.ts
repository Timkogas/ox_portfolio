export interface DrugoeProject {
  title: string;
  titleMuted?: string;
  darkBlock: {
    height: number;
  };
}

export interface DrugoeData {
  projects: DrugoeProject[];
}
