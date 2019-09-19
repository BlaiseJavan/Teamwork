/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import {
  newEmployee, wrongNewEmployee, employee, wrongEmployee, otherEmployee,
} from './data';

chai.use(chaiHttp);
chai.should();

describe('Employee', () => {
  it('should be able to sign up', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(201);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(wrongNewEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(401);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when the email is exist', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('user should be able to sign in', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(employee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign in when username or password is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(wrongEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(403);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('user should not be able to sign in when user with the email not found', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(otherEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
