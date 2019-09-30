/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import {
  newArticle, wrongArticle, edArticle, id, wrongId, token, wrongToken, invalidArticle, comment,
} from './data';

chai.use(chaiHttp);
chai.should();

describe('Article tests', () => {
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

  it('should create a comment for a specific article', (done) => {
    chai.request(app)
      .post(`/api/v1/articles/${id}/comments`)
      .set('token', token)
      .send(comment)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(201);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to create a comment when the article is not found article', (done) => {
    chai.request(app)
      .post(`/api/v1/articles/${wrongId}/comments`)
      .set('token', token)
      .send(comment)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to create a comment when the token is not valid', (done) => {
    chai.request(app)
      .post(`/api/v1/articles/${id}/comments`)
      .set('token', wrongToken)
      .send(comment)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(403);
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

  it('should be able to create an article when is not valid', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('token', token)
      .send(invalidArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(401);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to edit an article', (done) => {
    chai.request(app)
      .patch(`/api/v1/articles/${id}`)
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
      .patch(`/api/v1/articles/${wrongId}`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to view all article', (done) => {
    chai.request(app)
      .get('/api/v1/articles')
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to view an article', (done) => {
    chai.request(app)
      .get(`/api/v1/articles/${id}`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to view an article when is not exist', (done) => {
    chai.request(app)
      .get(`/api/v1/articles/${wrongId}`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to delete an article', (done) => {
    chai.request(app)
      .delete(`/api/v1/articles/${id}`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to delete an article when is not found', (done) => {
    chai.request(app)
      .delete(`/api/v1/articles/${wrongId}`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to view all article when not found', (done) => {
    chai.request(app)
      .get('/api/v1/articles')
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
