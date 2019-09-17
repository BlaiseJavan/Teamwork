'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _employeeContoller = require('../controllers/employeeContoller');

var _employeeContoller2 = _interopRequireDefault(_employeeContoller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// employees routes
app.post('/api/v1/auth/signup', _employeeContoller2.default.signup);

exports.default = app;