import { Article } from "../entities";

export interface IArticlesRepository {
  /**
   * Get specific article using article ID
   * @param: articleId - string - generated article id
   * @return: requested Article
   * */
  getArticleById(articleId: string): Promise<Article>;

  /**
   * Get all Articles
   * @return - array<Article> Articles list
   * */
  getAllArticles(): Promise<Article[]>;
}
