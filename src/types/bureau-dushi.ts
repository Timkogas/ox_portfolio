export interface BureauDushiProjectInfo {
  brand: string;
  role: string;
  sphere: string;
  year: string;
}

export interface BureauDushiStructureBlock {
  title: string;
  text: string;
}

export interface BureauDushiProblemSolution {
  problem: string;
  solution: string;
}

export interface BureauDushiData {
  heroImage: string;
  projectInfo: BureauDushiProjectInfo;
  context: {
    title: string;
    content: string;
  };
  process: {
    title: string;
    content: string;
  };
  structure: {
    blocks: BureauDushiStructureBlock[];
    sitemapImage: string;
  };
  afterStructure: string;
  keyPagesImage: string;
  afterKeyPages: string;
  problemSolutions: BureauDushiProblemSolution[];
  visualSystem: string;
  referencesImage: string;
  wireframesImage: string;
  darkBlock: {
    height: number;
  };
}
