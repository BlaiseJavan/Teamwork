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
}

export default articleController;
