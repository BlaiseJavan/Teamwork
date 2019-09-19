import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  jwt: [Joi.string(), Joi.number().required()],
  id: Joi.number().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  gender: Joi.string().required(),
  department: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().alphanum().min(2).required(),
  phonenumber: Joi.string().min(2).required(),
  password: Joi.string().required(),
  jobRole: Joi.string().required(),
});

export default schema;
