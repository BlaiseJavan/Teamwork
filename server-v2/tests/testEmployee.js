/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/src/server';
import {
  newEmployee, wrongNewEmployee, employee,
  wrongEmployee, invalidEmployee, InvalidNewEmployee,
  otherEmployee, invalidLastName, invalidAddress,
  invalidDepartment, invalidPhonenumber, invalidJobRole, noPassord,
} from './data';

chai.use(chaiHttp);
chai.should();

describe('Employee tests', () => {
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

  it('should not be able to sign for user with no password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(noPassord)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when the user is wrong', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(wrongNewEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when the user is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(InvalidNewEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when the email is exist', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(409);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when lastName is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidLastName)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when address is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidAddress)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when department is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidDepartment)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when jobROle is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidJobRole)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign up when phonenumber is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPhonenumber)
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
        chai.expect(res.statusCode).to.be.equal(401);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to sign in when username or password is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(invalidEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('user should not be able to sign in when user with the email not found', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(otherEmployee)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
