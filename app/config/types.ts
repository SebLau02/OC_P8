export interface Icons {
  className?: string;
}

export interface ArticlesSlugs {
  slug: string;
  title: string;
  cover: string;
}

export interface ProjectBase {
  name: string;
  description: string;
  link: string;
  cover: string;
  technologies: string[];
}
