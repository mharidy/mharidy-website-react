export interface ArticleImage {
  imageUrl: string;
  imageAlt: string;
}
export interface Article {
  id: string;
  header: string;
  content: string;
  articleImages: Array<ArticleImage>;
  isVisible: boolean;
}
