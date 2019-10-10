'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.token = exports.article = exports.requiredPass = exports.wrongEmployee = exports.employee = exports.emailExist = exports.newEmployee = exports.wrongNewEmployee = undefined;

var _helper = require('../helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newEmployee = {
  firstname: 'blaise',
  lastname: 'blaise',
  email: 'blaise@gmail.com',
  username: 'blaise',
  password: 'blaise'
};

var wrongNewEmployee = {
  firstname: 'blaise',
  lastname: 'blaise',
  email: 'blaise2@gmail.com',
  username: 'blaise'
};

var emailExist = {
  firstname: 'blaise',
  lastname: 'blaise',
  email: 'blaise@gmail.com',
  username: 'blaise',
  password: 'blaise'
};

var employee = {
  email: 'blaise@gmail.com',
  password: 'blaise'
};

var wrongEmployee = {
  email: 'blaise@gmail.com',
  password: 'blais'
};

var requiredPass = {
  email: 'blaise@gmail.com'
};

var article = {
  title: 'Lorem ipsum dolor sit amet consectttg jbcsjshs',
  article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt sed voluptate nobis distinctio. Suscipit, ullam rerum? Omnis, molestiae hic perferendis illo laboriosam qui ducimus placeat consequatur similique aliquam sint.',
  tags: 'music'
};

var token = _helper2.default.generateToken();

exports.wrongNewEmployee = wrongNewEmployee;
exports.newEmployee = newEmployee;
exports.emailExist = emailExist;
exports.employee = employee;
exports.wrongEmployee = wrongEmployee;
exports.requiredPass = requiredPass;
exports.article = article;
exports.token = token;