'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-mutable-exports */
_dotenv2.default.config();

var pool = void 0;

if (process.env.NODE_ENV === 'TEST') {
  pool = new _pg.Pool({
    connectionString: process.env.DATABASE_URL_TEST
  });
} else {
  pool = new _pg.Pool({
    connectionString: process.env.DATABASE_URL
  });
}
exports.default = pool;