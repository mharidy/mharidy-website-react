import { Article, ArticleImage } from "../entities";
import { ARTICLES_LIST } from "../constants";
import { IArticlesRepository } from "./IArticlesRepository";

export class ArticlesRepository implements IArticlesRepository {
  //TODO: Do i need the constructor ?!, ifNot -> delete it
  constructor() {}

  /**
   * Get specific article using article ID
   * @param: articleId - string - generated article id
   * @return: requested Article
   * */
  async getArticleById(articleId: string): Promise<Article> {
    return ARTICLES_LIST[articleId];
  }

  /**
   * Get all Articles
   * @return - array<Article> Articles list
   * */
  async getAllArticles(): Promise<Article[]> {
    return ARTICLES_LIST;
  }
}
