import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  title: Joi.string().regex(/^[a-zA-Z0-9 ]{3,1000}$/).required(),
  article: Joi.string().regex(/^[a-zA-Z0-9 ,.!@#$%^&*()?<>!]{10,1000}$/).required(),
  date: Joi.string().required(),
  userId: Joi.number().required(),
  tag: Joi.valid('music', 'sport', 'culture'),
  status: Joi.string().required(),
});

export default schema;
