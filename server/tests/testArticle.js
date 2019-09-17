/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import {
  newArticle, wrongArticle, edArticle, id, wrongId, token, wrongToken,
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

  it('should be able to edit an article', (done) => {
    chai.request(app)
      .patch(`/api/v1/editArticle/${id}`)
      .set('token', token)
      .send(edArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to edit an article when is not found', (done) => {
    chai.request(app)
      .patch(`/api/v1/editArticle/${wrongId}`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
