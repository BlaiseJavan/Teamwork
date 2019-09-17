'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var newEmployee = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali',
  phonenumber: '+250788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'IT'
};

var wrongNewEmployee = {
  lastname: 'irakoze',
  email: 'blais2e@gmail.com',
  password: 'blaise',
  gender: 'male',
  phonenumber: '078821157',
  jobRole: 'developer',
  department: 'IT',
  address: 'kigali'
};

var employee = {
  email: 'blaise@gmail.com',
  password: 'blaise'
};

var wrongEmployee = {
  email: 'blaise@gmail.com',
  password: 'blai'
};

var otherEmployee = {
  email: 'blaise1@gmail.com',
  password: 'blaise'
};

var newArticle = {
  title: 'article1',
  article: 'Checking the network cables, modem, and router',
  userId: 1
};

var wrongArticle = {
  article: 'Checking the network cables, modem, and router',
  userId: 1
};

var edArticle = {
  title: 'article1',
  article: 'Checking the network cables',
  userId: 1
};

var id = 1;

var wrongId = 3284;

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4NDY3MjgxLCJleHAiOjE1NjkwNzIwODF9.5oAPdwsQM5f9PnR_arUoSdeCUDUswm48I8X-H2zirc4';

var wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4NDY3MjgxLCJl';

exports.wrongNewEmployee = wrongNewEmployee;
exports.newEmployee = newEmployee;
exports.employee = employee;
exports.wrongEmployee = wrongEmployee;
exports.otherEmployee = otherEmployee;
exports.newArticle = newArticle;
exports.wrongArticle = wrongArticle;
exports.edArticle = edArticle;
exports.id = id;
exports.wrongId = wrongId;
exports.token = token;
exports.wrongToken = wrongToken;