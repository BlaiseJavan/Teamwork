import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  email: Joi.string().email().required().error(err => ({ message:'Invalid email'})),
  password: Joi.string(),
});

export default schema;
