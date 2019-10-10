'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var employeeValidation = _joi2.default.object().keys({
  firstname: _joi2.default.string().min(3).trim(),
  lastname: _joi2.default.string().required(),
  email: _joi2.default.string().email().required(),
  password: _joi2.default.string().required(),
  username: _joi2.default.string().required()
});

var profileValidation = _joi2.default.object().keys({
  gender: _joi2.default.string(),
  address: _joi2.default.string(),
  jobrole: _joi2.default.string(),
  department: _joi2.default.string()
});

var signinValidation = _joi2.default.object().keys({
  email: _joi2.default.string().email().required(),
  password: _joi2.default.string().required()
});

var articleValidation = _joi2.default.object().keys({
  title: _joi2.default.string().min(3).required(),
  article: _joi2.default.string().min(10).required(),
  tags: _joi2.default.string().valid('music', 'culture', 'sport').required()
});

exports.default = {
  articleValidation: articleValidation,
  employeeValidation: employeeValidation,
  signinValidation: signinValidation,
  profileValidation: profileValidation

};