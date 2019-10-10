'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('../server/routes/routes');

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = require('./routes/routes');

var _routes4 = _interopRequireDefault(_routes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.json());
app.use(_routes2.default);
app.use(_routes4.default);
var port = process.env.PORT || 3000;

app.listen(port, function () {
  return console.log('server is running on ' + port + ' port');
});

exports.default = app;