'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _connection = require('../config/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
  function Article(title, article, tags, employeeId) {
    _classCallCheck(this, Article);

    this.title = title;
    this.article = article;
    this.tags = tags;
    this.report = 'appropriate';
    this.employeeId = employeeId;
    this.createdOn = (0, _moment2.default)().format('YYYY-MM-DD');
  }

  _createClass(Article, null, [{
    key: 'createArticleTable',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _connection2.default.query('\n    CREATE TABLE IF NOT EXISTS article (\n      id SERIAL PRIMARY KEY,\n      title  text,\n      article  text,\n      employeeId SERIAL,\n      tags text,\n      report text,\n      createdOn date,\n      foreign key(employeeId) REFERENCES employee ON DELETE CASCADE\n          )');

              case 2:
                result = _context.sent;
                return _context.abrupt('return', result);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createArticleTable() {
        return _ref.apply(this, arguments);
      }

      return createArticleTable;
    }()
  }, {
    key: 'createArticle',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _connection2.default.query('INSERT INTO article(title, article, employeeId, tags, report, createdOn) VALUES (\n        \'' + data.title + '\',\n        \'' + data.article + '\',\n        \'' + data.employeeId + '\',\n        \'' + data.tags + '\',\n        \'' + data.report + '\',\n        \'' + data.createdOn + '\'\n        ) returning *;\n      ');

              case 2:
                result = _context2.sent;
                return _context2.abrupt('return', result);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createArticle(_x) {
        return _ref2.apply(this, arguments);
      }

      return createArticle;
    }()
  }, {
    key: 'findAll',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _connection2.default.query('SELECT * FROM article ORDER BY createdon DESC');

              case 2:
                result = _context3.sent;
                return _context3.abrupt('return', result);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findAll() {
        return _ref3.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: 'findBy',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(column, value) {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _connection2.default.query('SELECT * FROM article WHERE ' + column + '=\'' + value + '\';');

              case 2:
                result = _context4.sent;
                return _context4.abrupt('return', result);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findBy(_x2, _x3) {
        return _ref4.apply(this, arguments);
      }

      return findBy;
    }()
  }, {
    key: 'Delete',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _connection2.default.query('DELETE FROM article WHERE id=\'' + id + '\';');

              case 2:
                result = _context5.sent;
                return _context5.abrupt('return', result);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function Delete(_x4) {
        return _ref5.apply(this, arguments);
      }

      return Delete;
    }()
  }]);

  return Article;
}();

exports.default = Article;