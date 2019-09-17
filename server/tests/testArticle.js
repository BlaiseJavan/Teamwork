/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import {
  newArticle, wrongArticle, token, wrongToken,
} from './data';

chai.use(chaiHttp);
chai.should();

describe('Articles', () => {
  it('should be able to create an article', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('token', token)
      .send(newArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(201);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to create an article when token is wrong', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('token', wrongToken)
      .send(newArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(403);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to create an article', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('token', token)
      .send(newArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to create an article when is not valid', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('token', token)
      .send(wrongArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(401);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
