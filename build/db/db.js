'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

var _employee = require('../models/employee');

var _employee2 = _interopRequireDefault(_employee);

var _article = require('../models/article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createTables = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var password, employee;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            password = _helper2.default.hashPassword('admin');
            _context.next = 3;
            return _employee2.default.createUserTable();

          case 3:
            _context.next = 5;
            return _article2.default.createArticleTable();

          case 5:
            _context.next = 7;
            return _employee2.default.CleanEmployee();

          case 7:
            employee = new _employee2.default('admin', 'admin', 'admin@gmail.com', 'kigali', 'male', 'developer', 'IT', true, 'admin', password);
            _context.next = 10;
            return _employee2.default.createUser(employee);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function createTables() {
    return _ref.apply(this, arguments);
  };
}();
createTables();

exports.default = createTables;