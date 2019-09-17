import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  title: Joi.string().required(),
  article: Joi.string().required(),
  date: Joi.string().required(),
  userId: Joi.number().required(),
});

export default schema;
