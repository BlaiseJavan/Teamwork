/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server-v2';
import {
  newArticle, wrongArticle, edArticle, id, wrongId, token,
  wrongToken, comment, category, otherCategory,
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

  it('should be able to view all article belongs to a category', (done) => {
    chai.request(app)
      .get(`/api/v1/articles/${category}/category`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to view all article belongs to a category', (done) => {
    chai.request(app)
      .get(`/api/v1/articles/${otherCategory}/category`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should be able to flag an article', (done) => {
    chai.request(app)
      .patch(`/api/v1/articles/${id}/flag`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
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

  it('should not be able to create an article', (done) => {
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

  it('should not be able to create an article when the atricle is wrong', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('token', token)
      .send(wrongArticle)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(400);
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

  it('should not be able to flag an article when not found', (done) => {
    chai.request(app)
      .patch(`/api/v1/articles/${id}/flag`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
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

  it('should not be able to view all article belongs to a category the article is not exist', (done) => {
    chai.request(app)
      .get(`/api/v1/articles/${category}/category`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should not be able to flag an article when is not exist', (done) => {
    chai.request(app)
      .get(`/api/v1/articles/${id}/flag`)
      .set('token', token)
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(404);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
