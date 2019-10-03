import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  firstname: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required().error(() => ({ message: 'Invalid firstname ' })),
  lastname: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required().error(() => ({ message: 'Invalid lastname ' })),
  gender: Joi.string().valid('male', 'female').required(),
  department: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required().error(() => ({ message: 'Invalid department ' })),
  email: Joi.string().email().required().error(() => ({ message: 'Invalid email ' })),
  address: Joi.string().alphanum().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    .error(() => ({ message: 'Invalid address ' })),
  phonenumber: Joi.string().min(2).regex(/^[0-9]{10,13}$/)
    .required()
    .error(() => ({ message: 'Invalid phonenumber ' })),
  password: Joi.string(),
  jobRole: Joi.string().regex(/^[a-zA-Z]{3,30}$/)
    .required().error(() => ({ message: 'Invalid jobRole name' })),
});

export default schema;
