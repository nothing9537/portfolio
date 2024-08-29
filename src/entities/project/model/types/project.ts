export type ProjectTag = {
  name: string;
  color: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  sourceCodeUrl: string;
};