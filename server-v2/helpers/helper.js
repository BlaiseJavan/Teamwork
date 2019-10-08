import tokens from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt-nodejs';
import Joi from 'joi';

dotenv.config();

class helper {
  static generateToken(id, email, isadmin) {
    const token = tokens.sign({ id, email, isadmin }, process.env.secret, { expiresIn: '7d' });
    return token;
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }

  static validator(identifier, data) {
    let schema = false;
    switch (identifier) {
      case 'employee': {
        schema = Joi.object().keys({
          firstname: Joi.string().min(3).trim(),
          lastname: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
          username: Joi.string().required(),
        });
        break;
      }
      case 'signin': {
        schema = Joi.object().keys({
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        });
        break;
      }
      default: {
        schema = false;
      }
    }
    return Joi.validate(data, schema);
  }

  static validationErrors(res, error) {
    const errorMessage = error.details.map((d) => d.message.replace(/"/g, ''));
    return res.status(400).json({
      status: 400,
      message: errorMessage,
    });
  }
}

export default helper;
