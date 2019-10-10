'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable radix */


var _article = require('../models/article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArticleController = function () {
  function ArticleController() {
    _classCallCheck(this, ArticleController);
  }

  _createClass(ArticleController, null, [{
    key: 'createArticle',

    // method to create an article
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var article, newArticle;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                article = new _article2.default(req.body.title, req.body.article, req.body.tags);

                article.employeeId = req.user.id;
                _context.next = 5;
                return _article2.default.createArticle(article);

              case 5:
                newArticle = _context.sent;
                return _context.abrupt('return', res.status(201).json({
                  status: 201,
                  data: newArticle.rows[0]
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', res.status(401).json({
                  status: 401,
                  message: 'invalid token'
                }));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function createArticle(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return createArticle;
    }()

    // methode to fetch all articles

  }, {
    key: 'viewAllArticles',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var allArticles;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _article2.default.findAll();

              case 2:
                allArticles = _context2.sent;

                if (!(allArticles.rowCount === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt('return', res.status(404).json({
                  status: 404,
                  error: 'articles not found'
                }));

              case 5:
                return _context2.abrupt('return', res.status(200).json({
                  status: 200,
                  data: allArticles.rows
                }));

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function viewAllArticles(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return viewAllArticles;
    }()

    // methode to view a specific article

  }, {
    key: 'specificArticle',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var articleId, findArticle;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                articleId = req.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return _article2.default.findBy('id', articleId);

              case 4:
                findArticle = _context3.sent;

                if (!findArticle) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', res.status(200).json({
                  status: 200,
                  message: 'article found',
                  data: findArticle.rows[0]
                }));

              case 7:
                return _context3.abrupt('return', res.status(404).json({
                  status: 404,
                  error: 'article not found'
                }));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);
                return _context3.abrupt('return', res.status(401).json({
                  status: 401,
                  message: 'invalid authantication'
                }));

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 10]]);
      }));

      function specificArticle(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return specificArticle;
    }()

    // method to delete an article

  }, {
    key: 'deleteArticle',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var column, articleId, employeeId, findArticle;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                column = 'id';
                articleId = req.params.id;
                employeeId = req.user.id;
                _context4.next = 5;
                return _article2.default.findBy(column, articleId);

              case 5:
                findArticle = _context4.sent;
                _context4.prev = 6;

                if (!findArticle) {
                  _context4.next = 13;
                  break;
                }

                if (!(findArticle.rows[0].employeeid === employeeId)) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 11;
                return _article2.default.Delete(articleId);

              case 11:
                return _context4.abrupt('return', res.status(200).json({
                  status: 200,
                  message: 'articles successful deleted'
                }));

              case 12:
                return _context4.abrupt('return', res.status(400).json({
                  status: 400,
                  error: 'not your article'
                }));

              case 13:
                return _context4.abrupt('return', res.status(404).json({
                  status: 404,
                  error: 'article not found'
                }));

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4['catch'](6);
                return _context4.abrupt('return', res.status(400).json({
                  status: 400,
                  message: 'the artic'
                }));

              case 19:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[6, 16]]);
      }));

      function deleteArticle(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);

  return ArticleController;
}();

exports.default = ArticleController;