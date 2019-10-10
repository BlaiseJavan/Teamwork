'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _articleController = require('../controllers/articleController');

var _articleController2 = _interopRequireDefault(_articleController);

var _auth = require('../middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

var _validator = require('../middleware/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

// articles routes
router.post('/', _validator2.default.article, _auth2.default, _articleController2.default.createArticle);
router.get('/', _auth2.default, _articleController2.default.viewAllArticles);
router.get('/:id', _auth2.default, _articleController2.default.specificArticle);
router.delete('/:id', _auth2.default, _articleController2.default.deleteArticle);

exports.default = router;