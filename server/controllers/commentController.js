import moment from 'moment';
import validator from '../helpers/commentValidator';
import comments from '../models/comments';
import articles from '../models/articles';

class CommentController {
  static createComment(req, res) {
    const commenterId = req.user.id;
    // eslint-disable-next-line radix
    const articleId = parseInt(req.params.id);
    const id = comments.length + 1;
    const createdOn = moment().format();
    const { comment } = req.body;
    // eslint-disable-next-line radix
    const findArticle = articles.find((a) => a.id === articleId);
    const newComment = validator.validate({
      id, comment, createdOn, commenterId, articleId,
    });
    console.log(findArticle);
    if (findArticle) {
      if (!newComment.error) {
        comments.push(newComment.value);
        return res.status(201).json({
          status: 201,
          message: 'Comment created successfull',
          data: newComment.value,
        });
      }
      const validationError = newComment.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: validationError,
      });
    }
    return res.status(404).json({
      status: 404,
      massage: 'the article is not found',
    });
  }
}

export default CommentController;
