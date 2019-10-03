import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  comment: Joi.string().regex(/^[a-zA-Z0-9 ,.!@#$%^&*()]{10,1000}$/).required(),
  createdOn: Joi.string().required(),
  commenterId: Joi.number().required(),
  articleId: Joi.number().required(),
});

export default schema;
