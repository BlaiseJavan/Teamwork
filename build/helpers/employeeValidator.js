'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _joi2.default.object().keys({
  jwt: [_joi2.default.string(), _joi2.default.number().required()],
  id: _joi2.default.number().required(),
  firstname: _joi2.default.string().required(),
  lastname: _joi2.default.string().required(),
  gender: _joi2.default.string().required(),
  department: _joi2.default.string().required(),
  email: _joi2.default.string().email().required(),
  address: _joi2.default.string().alphanum().min(2).required(),
  phonenumber: _joi2.default.string().min(2).required(),
  password: _joi2.default.string().required(),
  jobRole: _joi2.default.string().required()
});

exports.default = schema;