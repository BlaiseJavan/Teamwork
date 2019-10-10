'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _employeeController = require('../controllers/employeeController');

var _employeeController2 = _interopRequireDefault(_employeeController);

var _validator = require('../middleware/validator');

var _validator2 = _interopRequireDefault(_validator);

var _auth = require('../middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

// employees routes
router.post('/signup', _validator2.default.employee, _employeeController2.default.signup);
router.post('/signin', _validator2.default.signin, _employeeController2.default.signin);
router.patch('/updateProfile/:id', _validator2.default.profile, _auth2.default, _employeeController2.default.updateProfile);

exports.default = router;