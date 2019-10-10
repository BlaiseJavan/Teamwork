/* eslint-disable consistent-return */
import validation from '../helpers/validation';

class Validator {
  static employee(req, res, next) {
    const employeeValidated = validation.employeeValidation.validate({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    });

    if (!employeeValidated.error) {
      req.user = employeeValidated;
      next();
    } else {
      const errorMessage = employeeValidated.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
  }

  static signin(req, res, next) {
    const signinValidated = validation.signinValidation.validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (!signinValidated.error) {
      req.user = signinValidated;
      next();
    } else {
      const errorMessage = signinValidated.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
  }

  static article(req, res, next) {
    const articleValidated = validation.articleValidation.validate({
      title: req.body.title,
      article: req.body.article,
      tags: req.body.tags,
    });
    if (!articleValidated.error) {
      req.user = articleValidated;
      next();
    } else {
      const errorMessage = articleValidated.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
  }
}
export default Validator;
