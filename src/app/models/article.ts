export interface ArticleMeta {
  id: string;
  title: string;
  date: Date;
  tags: string[],
  meta: string;
}

export interface Article {
  title: string;
  date: Date;
  tags: string[],
  article: string;
}
