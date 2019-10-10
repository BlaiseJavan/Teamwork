'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _employeeRoutes = require('./employeeRoutes');

var _employeeRoutes2 = _interopRequireDefault(_employeeRoutes);

var _articleRoutes = require('./articleRoutes');

var _articleRoutes2 = _interopRequireDefault(_articleRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// all routes
app.use('/api/v2/auth', _employeeRoutes2.default);
app.use('/api/v2/articles', _articleRoutes2.default);

exports.default = app;