'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();

var helper = function () {
  function helper() {
    _classCallCheck(this, helper);
  }

  _createClass(helper, null, [{
    key: 'generateToken',
    value: function generateToken(id, email, isadmin) {
      var token = _jsonwebtoken2.default.sign({ id: id, email: email, isadmin: isadmin }, process.env.secret, { expiresIn: '7d' });
      return token;
    }
  }, {
    key: 'hashPassword',
    value: function hashPassword(password) {
      return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(10));
    }
  }, {
    key: 'comparePassword',
    value: function comparePassword(hashPassword, password) {
      return _bcryptNodejs2.default.compareSync(password, hashPassword);
    }
  }]);

  return helper;
}();

exports.default = helper;