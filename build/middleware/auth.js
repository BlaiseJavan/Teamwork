'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var auth = function auth(req, res, next) {
  try {
    var token = req.headers.token;

    var verifyToken = _jsonwebtoken2.default.verify(token, process.env.secret);

    if (verifyToken) {
      req.user = verifyToken;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      status: 403,
      error: 'authantication is not valid'
    });
  }
  return 0;
};

exports.default = auth;