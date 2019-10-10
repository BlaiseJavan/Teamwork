'use strict';

var _chai = require('chai');

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
describe('Employee tests v2', function () {
  it('Should be able to sign up', function (done) {
    (0, _supertest2.default)(_2.default).post('/api/v2/auth/signup').send(_data.newEmployee).set('Accept', 'application/json').expect('Content-Type', /json/).expect(201).end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.be.equal(201);
      (0, _chai.expect)(res.body).to.be.a('object');
      done();
    });
  });

  it('Should not be able to sign up when the data are invalid', function (done) {
    (0, _supertest2.default)(_2.default).post('/api/v2/auth/signup').send(_data.wrongNewEmployee).set('Accept', 'application/json').expect('Content-Type', /json/).expect(400).end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.be.equal(400);
      (0, _chai.expect)(res.body).to.be.a('object');
      done();
    });
  });

  it('Should not be able to sign up when email is exist', function (done) {
    (0, _supertest2.default)(_2.default).post('/api/v2/auth/signup').send(_data.emailExist).set('Accept', 'application/json').expect('Content-Type', /json/).expect(409).end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.be.equal(409);
      (0, _chai.expect)(res.body).to.be.a('object');
      done();
    });
  });

  it('Should be able to signin', function (done) {
    (0, _supertest2.default)(_2.default).post('/api/v2/auth/signin').send(_data.employee).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.be.equal(200);
      (0, _chai.expect)(res.body).to.be.a('object');
      done();
    });
  });

  it('Should not be able to signin when data are invalid', function (done) {
    (0, _supertest2.default)(_2.default).post('/api/v2/auth/signin').send(_data.wrongEmployee).set('Accept', 'application/json').expect('Content-Type', /json/).expect(401).end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.be.equal(401);
      (0, _chai.expect)(res.body).to.be.a('object');
      done();
    });
  });

  it('Should not be able to signin when data are invalid', function (done) {
    (0, _supertest2.default)(_2.default).post('/api/v2/auth/signin').send(_data.requiredPass).set('Accept', 'application/json').expect('Content-Type', /json/).expect(400).end(function (err, res) {
      (0, _chai.expect)(res.body.status).to.be.equal(400);
      (0, _chai.expect)(res.body).to.be.a('object');
      done();
    });
  });
});