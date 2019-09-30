import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  title: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    .error(() => ({ message: 'Invalid article title' })),
  article: Joi.string().regex(/^[a-zA-Z0-9 ,.!@#$%^&*()]{10,1000}$/).required()
    .error(() => ({ message: 'Invalid article' })),
  date: Joi.string().required(),
  userId: Joi.number().required(),
});

export default schema;
