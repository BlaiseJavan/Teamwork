'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _employees = require('../models/employees');

var _employees2 = _interopRequireDefault(_employees);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

var _employeeValidator = require('../helpers/employeeValidator');

var _employeeValidator2 = _interopRequireDefault(_employeeValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userController = function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, null, [{
    key: 'signup',

    // signup methode
    value: function signup(req, res) {
      var empId = _employees2.default.length + 1;
      var _req$body = req.body,
          firstname = _req$body.firstname,
          lastname = _req$body.lastname,
          email = _req$body.email,
          password = _req$body.password,
          gender = _req$body.gender,
          phonenumber = _req$body.phonenumber,
          jobRole = _req$body.jobRole,
          department = _req$body.department,
          address = _req$body.address;

      var existEmail = _employees2.default.find(function (e) {
        return e.email === email;
      });
      if (!existEmail) {
        var token = _helper2.default.generateToken(empId);
        var newEmployee = _employeeValidator2.default.validate({
          // eslint-disable-next-line max-len
          jwt: token, id: empId, firstname: firstname, lastname: lastname, email: email, password: _helper2.default.hashPassword(password), gender: gender, phonenumber: phonenumber, jobRole: jobRole, department: department, address: address
        });
        if (!newEmployee.error) {
          _employees2.default.push(newEmployee.value);
          return res.status(201).json({
            status: 201,
            data: newEmployee.value
          });
        }
        var validationError = newEmployee.error.details[0].message.replace('"', ' ').replace('"', '');
        return res.status(401).json({
          status: 401,
          error: validationError
        });
      }
      return res.status(400).json({
        status: 400,
        error: 'the email is already exist'
      });
    }
  }]);

  return userController;
}();

exports.default = userController;