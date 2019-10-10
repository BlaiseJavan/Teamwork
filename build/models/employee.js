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

var Employee = function () {
  function Employee(firstname, lastname, email, username, password, address, gender, jobrole, department) {
    _classCallCheck(this, Employee);

    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
    this.gender = gender;
    this.jobrole = jobrole;
    this.department = department;
    this.isadmin = false;
    this.createdon = (0, _moment2.default)().format('YYYY-MM-DD');
  }

  _createClass(Employee, null, [{
    key: 'createUserTable',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _connection2.default.query('\n          CREATE TABLE IF NOT EXISTS employee (\n              id SERIAL PRIMARY KEY,\n              firstname text,\n              lastname text,\n              email text UNIQUE,\n              address text,\n              gender text,\n              jobrole text,\n              department text,\n              isadmin boolean,\n              username text,\n              password text,\n              createdon date\n          )');

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

      function createUserTable() {
        return _ref.apply(this, arguments);
      }

      return createUserTable;
    }()
  }, {
    key: 'createUser',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _connection2.default.query('INSERT INTO employee(firstname, lastname, email, username, password, address, gender, jobrole,\n        department, isadmin, createdon) VALUES(\n        \'' + data.firstname + '\',\n        \'' + data.lastname + '\',\n        \'' + data.email + '\',\n        \'' + data.username + '\',\n        \'' + data.password + '\',\n        \'' + data.address + '\',\n        \'' + data.gender + '\',\n        \'' + data.jobrole + '\',\n        \'' + data.department + '\',\n        \'' + data.isadmin + '\',\n        \'' + data.createdon + '\'\n        ) returning *;\n      ');

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

      function createUser(_x) {
        return _ref2.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: 'CleanEmployee',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _connection2.default.query('DELETE FROM employee;');

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

      function CleanEmployee() {
        return _ref3.apply(this, arguments);
      }

      return CleanEmployee;
    }()
  }, {
    key: 'selectCount',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(table, column, value) {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _connection2.default.query('SELECT COUNT(1) FROM ' + table + ' WHERE ' + column + ' = \'' + value + '\';');

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

      function selectCount(_x2, _x3, _x4) {
        return _ref4.apply(this, arguments);
      }

      return selectCount;
    }()
  }, {
    key: 'findEmployee',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(email) {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _connection2.default.query('SELECT firstname, lastname, username, email FROM employee WHERE email=\'' + email + '\';');

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

      function findEmployee(_x5) {
        return _ref5.apply(this, arguments);
      }

      return findEmployee;
    }()
  }, {
    key: 'findBy',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(colomn, value) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _connection2.default.query('SELECT * FROM employee WHERE ' + colomn + '=\'' + value + '\';');

              case 2:
                result = _context6.sent;
                return _context6.abrupt('return', result);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function findBy(_x6, _x7) {
        return _ref6.apply(this, arguments);
      }

      return findBy;
    }()
  }, {
    key: 'updateProfile',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, data) {
        var result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _connection2.default.query('UPDATE employee SET address=\'' + data.address + '\', \n    gender=\'' + data.gender + '\', jobrole=\'' + data.jobrole + '\', \n    department=\'' + data.department + '\' WHERE id=\'' + id + '\';');

              case 2:
                result = _context7.sent;
                return _context7.abrupt('return', result);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateProfile(_x8, _x9) {
        return _ref7.apply(this, arguments);
      }

      return updateProfile;
    }()
  }]);

  return Employee;
}();

exports.default = Employee;