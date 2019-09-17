'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../src/server');

var _server2 = _interopRequireDefault(_server);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();

describe('Employee', function () {
  it('should be able to sign up', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/auth/signup').send(_data.newEmployee).end(function (err, res) {
      _chai2.default.expect(res.statusCode).to.be.equal(201);
      _chai2.default.expect(res.body).to.be.a('object');
      done();
    });
  });

  it('should not be able to sign up', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/auth/signup').send(_data.wrongNewEmployee).end(function (err, res) {
      _chai2.default.expect(res.statusCode).to.be.equal(401);
      _chai2.default.expect(res.body).to.be.a('object');
      done();
    });
  });

  it('should not be able to sign up when the email is exist', function (done) {
    _chai2.default.request(_server2.default).post('/api/v1/auth/signup').send(_data.newEmployee).end(function (err, res) {
      _chai2.default.expect(res.statusCode).to.be.equal(400);
      _chai2.default.expect(res.body).to.be.a('object');
      done();
    });
  });
});