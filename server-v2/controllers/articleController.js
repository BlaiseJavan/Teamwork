/* eslint-disable radix */
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
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: 'invalid token',
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
    try {
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
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: 'invalid authantication',
      });
    }
  }

  // method to delete an article
  static async deleteArticle(req, res) {
    const column = 'id';
    const articleId = req.params.id;
    const employeeId = req.user.id;
    const findArticle = await Article.findBy(column, articleId);
    try {
      if (findArticle) {
        if (findArticle.rows[0].employeeid === employeeId) {
          await Article.Delete(articleId);
          return res.status(200).json({
            status: 200,
            message: 'articles successful deleted',
          });
        }
        return res.status(400).json({
          status: 400,
          error: 'not your article',
        });
      }
      return res.status(404).json({
        status: 404,
        error: 'article not found',
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: 'the artic',
      });
    }
  }

  // methode to update an article
  static async editArticle(req, res) {
    const column = 'id';
    const articleId = req.params.id;
    const { title, article, tags } = req.body;
    const employeeId = req.user.id;
    const findArticle = await Article.findBy(column, articleId);
    console.log(title)
    if (findArticle) {
      if (findArticle.rows[0].employeeid === employeeId) {
        if (findArticle.rows[0].title === title && findArticle.rows[0].article === article && findArticle.rows[0].tags === tags) {
          return res.status(300).json({
            status: 300,
            message: 'no modification found',
          });
        }
        const updatedArticle = await Article.update(title || findArticle.rows[0].title, article || findArticle.rows[0].article, articleId, tags || findArticle.rows[0].tags);
        return res.status(200).json({
          status: 200,
          message: 'article successfully edited',
          data: updatedArticle.rows[0],
        });
      }
      return res.status(400).json({
        status: 400,
        error: 'not your article',
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'article not found',
    });
  }
}

export default ArticleController;
