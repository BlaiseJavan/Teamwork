/* eslint-disable radix */
import moment from 'moment';
import articles from '../models/articles';
import validator from '../helpers/articlesValidator';

class articleController {
  // method to create an article
  static createArticle(req, res) {
    const { title, article } = req.body;
    const articleId = articles.length + 1;
    const createdDate = moment().format();
    const userId = req.user.id;
    const newArticle = validator.validate({
      id: articleId, date: createdDate, title, article, userId,
    });
    if (!newArticle.error) {
      const checkTitle = articles.find((a) => a.title === title);
      if (!checkTitle) {
        articles.push(newArticle.value);
        return res.status(201).json({
          status: 201,
          data: newArticle.value,
        });
      }
      return res.status(400).json({
        status: 400,
        error: 'the title is used find a new one',
      });
    }
    const validationError = newArticle.error.details[0].message.replace('"', ' ').replace('"', '');
    return res.status(401).json({
      status: 401,
      error: validationError,
    });
  }

  // methode to update an article
  static editArticle(req, res) {
    // eslint-disable-next-line radix
    const articleId = parseInt(req.params.id);
    const { title, article } = req.body;
    const userId = req.user.id;
    const findArticle = articles.find((a) => a.id === articleId);
    if (!findArticle) {
      return res.status(404).json({
        status: 404,
        error: 'article not found',
      });
    }
    const findUserArticles = articles.filter((u) => u.userId === userId);
    const editId = findUserArticles.find((e) => e.id === articleId);
    editId.title = title;
    editId.article = article;
    editId.createdDate = moment().format('YYYY-MM-DD');
    return res.status(200).json({
      status: 200,
      message: 'article successfully edited',
      data: articles.value,
    });
  }

  // method to delete an article
  static deleteArticle(req, res) {
    // eslint-disable-next-line radix
    const articleId = parseInt(req.params.id);
    const deleteArticle = articles.find((a) => a.id === articleId);
    if (!deleteArticle) {
      return res.status(404).json({
        status: 404,
        error: 'article not found',
      });
    }
    const articleIndex = articles.indexOf(articleId);
    articles.splice(articleIndex, 1);
    return res.status(200).json({
      status: 200,
      message: 'articles successful deleted',
    });
  }

  // methode to fetch all articles
  static viewAllArticles(req, res) {
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (articles.length === 0) {
      return res.status(404).json({
        status: 404,
        error: 'articles not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: articles,
    });
  }

  // methode to view a specific article
  static specificArticle(req, res) {
    // eslint-disable-next-line radix
    const articleId = parseInt(req.params.id);
    const searchArticle = articles.find((a) => a.id === articleId);
    if (!searchArticle) {
      return res.status(404).json({
        status: 404,
        error: 'article not found',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'articles found',
      data: searchArticle,
    });
  }
}

export default articleController;
