/* eslint-disable radix */
import checkId from 'validator';
import Article from '../models/article';

class ArticleController {
  // method to create an article
  static async createArticle(req, res) {
    try {
      const article = new Article(
        req.body.title,
        req.body.article,
        req.body.tags,
      );
      article.employeeId = req.user.id;
      const newArticle = await Article.createArticle(article);
      return res.status(201).json({
        status: 201,
        data: newArticle.rows[0],
      });
    } catch (errors) {
      return res.status(400).json({
        status: 400,
        data: errors,
      });
    }
  }

  // methode to fetch all articles
  static async viewAllArticles(req, res) {
    const allArticles = await Article.findAll();
    if (allArticles.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        error: 'articles not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: allArticles.rows,
    });
  }

  // methode to view a specific article
  static async specificArticle(req, res) {
    const articleId = req.params.id;
    if (checkId.isUUID(articleId) === true) {
      const findArticle = await Article.findBy('id', articleId);
      if (findArticle) {
        return res.status(200).json({
          status: 200,
          message: 'article found',
          data: findArticle.rows[0],
        });
      }
      return res.status(404).json({
        status: 404,
        error: 'article not found',
      });
    }
    return res.status(400).json({
      status: 400,
      error: 'id is not valid',
    });
  }
}

export default ArticleController;
