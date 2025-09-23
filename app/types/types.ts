export type Project = {
  id: string;
  title: string;
  link?: string;
  gitRepo: string;
  image: string;
  description: string;
  longDescription: string;
  technologies: string[];
};
export type PaginationProps = {
  setPage: (page: number) => void;
  totalPages: number;
  page: number;
};

export type SelectedCategoryProps = {
  selectedCategory: string;
  categories: string[];
  setSelectedCategory: (category: string) => void;
};

export type ButtonOptionsProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setPage: (page: number) => void;
};
