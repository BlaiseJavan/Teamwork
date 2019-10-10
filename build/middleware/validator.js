'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable consistent-return */


var _validation = require('../helpers/validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: 'employee',
    value: function employee(req, res, next) {
      var employeeValidated = _validation2.default.employeeValidation.validate({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
      });

      if (!employeeValidated.error) {
        req.user = employeeValidated;
        next();
      } else {
        var errorMessage = employeeValidated.error.details[0].message.replace('"', ' ').replace('"', '');
        return res.status(400).json({
          status: 400,
          message: errorMessage
        });
      }
    }
  }, {
    key: 'profile',
    value: function profile(req, res, next) {
      var profileValidated = _validation2.default.profileValidation.validate({
        gender: req.body.gender,
        address: req.body.address,
        jobrole: req.body.jobrole,
        department: req.body.department
      });

      if (!profileValidated.error) {
        req.user = profileValidated;
        next();
      } else {
        var errorMessage = profileValidated.error.details[0].message.replace('"', ' ').replace('"', '');
        return res.status(400).json({
          status: 400,
          message: errorMessage
        });
      }
    }
  }, {
    key: 'signin',
    value: function signin(req, res, next) {
      var signinValidated = _validation2.default.signinValidation.validate({
        email: req.body.email,
        password: req.body.password
      });
      if (!signinValidated.error) {
        req.user = signinValidated;
        next();
      } else {
        var errorMessage = signinValidated.error.details[0].message.replace('"', ' ').replace('"', '');
        return res.status(400).json({
          status: 400,
          message: errorMessage
        });
      }
    }
  }, {
    key: 'article',
    value: function article(req, res, next) {
      var articleValidated = _validation2.default.articleValidation.validate({
        title: req.body.title,
        article: req.body.article,
        tags: req.body.tags
      });
      if (!articleValidated.error) {
        req.user = articleValidated;
        next();
      } else {
        var errorMessage = articleValidated.error.details[0].message.replace('"', ' ').replace('"', '');
        return res.status(400).json({
          status: 400,
          message: errorMessage
        });
      }
    }
  }]);

  return Validator;
}();

exports.default = Validator;