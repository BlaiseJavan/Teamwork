import express from 'express';
import userContoller from '../controllers/employeeContoller';
import articlesController from '../controllers/articleController';
import auth from '../middleware/auth';
import CommentController from '../controllers/commentController';

const app = express();

// employees routes
app.post('/api/v1/auth/signup', userContoller.signup);
app.post('/api/v1/auth/signin', userContoller.signin);

// articles routes
app.post('/api/v1/articles', auth, articlesController.createArticle);
app.patch('/api/v1/articles/:id', auth, articlesController.editArticle);
app.delete('/api/v1/articles/:id', auth, articlesController.deleteArticle);
app.get('/api/v1/articles', auth, articlesController.viewAllArticles);
app.get('/api/v1/articles/:id', auth, articlesController.specificArticle);

// comment routes
app.post('/api/v1/articles/:id/comments', auth, CommentController.createComment);


export default app;
