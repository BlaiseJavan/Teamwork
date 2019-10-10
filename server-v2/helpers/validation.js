import Joi from '@hapi/joi';

const employeeValidation = Joi.object().keys({
  firstname: Joi.string().min(3).trim(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
});

const profileValidation = Joi.object().keys({
  gender: Joi.string(),
  address: Joi.string(),
  jobrole: Joi.string(),
  department: Joi.string(),
});

const signinValidation = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const articleValidation = Joi.object().keys({
  title: Joi.string().min(3).required(),
  article: Joi.string().min(10).required(),
  tags: Joi.string().valid('music', 'culture', 'sport').required(),
});

export default {
  articleValidation,
  employeeValidation,
  signinValidation,
  profileValidation,

};
