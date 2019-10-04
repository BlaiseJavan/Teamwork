/* eslint-disable radix */
import moment from 'moment';
import articles from '../models/articles';
import validator from '../helpers/articlesValidator';

class articleController {
  // method to create an article
  static createArticle(req, res) {
    const { title, article, tag } = req.body;
    const articleId = articles.length + 1;
    const createdDate = moment().format();
    const userId = req.user.id;
    const newArticle = validator.validate({
      id: articleId, date: createdDate, title, article, tag, userId, status: 'regular',
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
        message: 'the title is used find a new one',
      });
    }
    const validationError = newArticle.error.details[0].message.replace('"', ' ').replace('"', '');
    return res.status(400).json({
      status: 400,
      message: validationError,
    });
  }

  // methode to update an article
  static editArticle(req, res) {
    // eslint-disable-next-line radix
    const articleId = parseInt(req.params.id);
    const { title, article, tag } = req.body;
    const findArticle = articles.find((a) => a.id === articleId);
    if (!findArticle) {
      return res.status(404).json({
        status: 404,
        message: 'article not found',
      });
    }
    // const foundUserArticle = articles.filter((u) => u.userId === userId);
    const updatedArticle = articles.find((e) => e.id === articleId);
    updatedArticle.title = title;
    updatedArticle.article = article;
    updatedArticle.tag = tag;
    updatedArticle.createdDate = moment().format('YYYY-MM-DD');
    const index = articles.indexOf(updatedArticle);
    articles[index] = updatedArticle;
    return res.status(200).json({
      status: 200,
      message: 'article successfully edited',
      data: updatedArticle,
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
        message: 'article not found',
      });
    }
    const articleIndex = articles.indexOf(articleId);
    articles.splice(articleIndex, 1);
    return res.status(200).json({
      status: 200,
      message: 'article successful deleted',
    });
  }

  // methode to fetch all articles
  static viewAllArticles(req, res) {
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (articles.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'articles not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: articles,
    });
  }

  // methode to fetch all articles
  static viewArticlesCategory(req, res) {
    const { tag } = req.params;
    if (articles.length !== 0) {
      const foundArticles = articles.find((a) => a.tag === tag);
      if (foundArticles) {
        return res.status(200).json({
          status: 200,
          message: `all articles belongs to ${tag}`,
          data: foundArticles,
        });
      }
      return res.status(404).json({
        status: 404,
        message: `no article found belongs to ${tag}`,
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'articles not found',
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
        message: 'article not found',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'All articles',
      data: searchArticle,
    });
  }

  static flagArticle(req, res) {
    const foundArticles = articles.find((a) => a.id === parseInt(req.params.id));
    if (foundArticles) {
      const articleIndex = articles.indexOf(foundArticles);
      articles[articleIndex].status = 'innapriopriate';
      return res.status(200).json({
        status: 200,
        message: 'article flagged',
        data: foundArticles,
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'article not found',
    });
  }
}

export default articleController;
