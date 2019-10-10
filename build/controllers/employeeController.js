'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _employee = require('../models/employee');

var _employee2 = _interopRequireDefault(_employee);

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var employeeController = function () {
  function employeeController() {
    _classCallCheck(this, employeeController);
  }

  _createClass(employeeController, null, [{
    key: 'signup',

    // signup method
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var employee, newEmployee, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                employee = new _employee2.default(req.body.firstname, req.body.lastname, req.body.email, req.body.username, _helper2.default.hashPassword(req.body.password));
                _context.prev = 1;
                _context.next = 4;
                return _employee2.default.createUser(employee);

              case 4:
                newEmployee = _context.sent;
                token = _helper2.default.generateToken(newEmployee.rows[0].id, newEmployee.rows[0].email, newEmployee.rows[0].isadmin);
                return _context.abrupt('return', res.status(201).json({
                  status: 201,
                  message: 'User sucessfuly added',
                  userToken: token,
                  data: {
                    id: newEmployee.rows[0].id,
                    firstname: newEmployee.rows[0].firstname,
                    lastname: newEmployee.rows[0].lastname,
                    email: newEmployee.rows[0].email,
                    username: newEmployee.rows[0].username
                  }
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);
                return _context.abrupt('return', res.status(409).json({
                  status: 409,
                  message: 'the email already exist'
                }));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function signup(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return signup;
    }()

    // signin method

  }, {
    key: 'signin',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var checkUser, checkedPassword, token;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _employee2.default.findBy('email', req.body.email);

              case 3:
                checkUser = _context2.sent;

                if (!(checkUser.rowCount !== 0)) {
                  _context2.next = 12;
                  break;
                }

                checkedPassword = _helper2.default.comparePassword(checkUser.rows[0].password, req.body.password);

                if (checkedPassword) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt('return', res.status(401).json({
                  status: 401,
                  massage: 'Invalid credentials'
                }));

              case 8:
                _context2.next = 10;
                return _helper2.default.generateToken(checkUser.rows[0].id, req.body.email, checkUser.rows[0].isadmin);

              case 10:
                token = _context2.sent;
                return _context2.abrupt('return', res.status(200).json({
                  status: 200,
                  massage: 'User is successfully logged in',
                  token: token,
                  data: {
                    firstname: checkUser.rows[0].firstname,
                    lastname: checkUser.rows[0].lastname,
                    email: checkUser.rows[0].email,
                    username: checkUser.rows[0].username
                  }
                }));

              case 12:
                return _context2.abrupt('return', res.status(404).json({
                  status: 404,
                  massage: 'user with the email not found'
                }));

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', res.status(400).json({
                  status: 400,
                  massage: _context2.t0
                }));

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      function signin(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return signin;
    }()

    // methode to update an article

  }, {
    key: 'updateProfile',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var empId, foundEmployee;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                empId = req.params.id;
                _context3.next = 3;
                return _employee2.default.findBy('id', empId);

              case 3:
                foundEmployee = _context3.sent;
                _context3.prev = 4;

                if (!foundEmployee) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 8;
                return _employee2.default.updateProfile(empId, req.body);

              case 8:
                return _context3.abrupt('return', res.status(200).json({
                  status: 200,
                  message: 'successfully updated',
                  data: {
                    id: foundEmployee.rows[0].id,
                    firstname: foundEmployee.rows[0].firstname,
                    lastname: foundEmployee.rows[0].lastname,
                    email: foundEmployee.rows[0].email,
                    gender: foundEmployee.rows[0].gender,
                    department: foundEmployee.rows[0].department,
                    jobrole: foundEmployee.rows[0].jobrole,
                    address: foundEmployee.rows[0].address
                  }
                }));

              case 9:
                return _context3.abrupt('return', res.status(404).json({
                  status: 404,
                  message: 'user not found'
                }));

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3['catch'](4);
                return _context3.abrupt('return', res.status(401).json({
                  status: 401,
                  message: 'invalid authentication'
                }));

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 12]]);
      }));

      function updateProfile(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return updateProfile;
    }()
  }]);

  return employeeController;
}();

exports.default = employeeController;