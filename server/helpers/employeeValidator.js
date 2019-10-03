import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  firstname: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required(),
  lastname: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required(),
  gender: Joi.string().valid('male', 'female').required(),
  department: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required(),
  email: Joi.string().email().required(),
  address: Joi.string().alphanum().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  phonenumber: Joi.string().min(2).regex(/^[0-9]{10,13}$/).required(),
  password: Joi.string(),
  jobRole: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required(),
});

export default schema;
