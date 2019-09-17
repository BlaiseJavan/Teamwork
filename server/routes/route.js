import express from 'express';
import userContoller from '../controllers/employeeContoller';
import articlesController from '../controllers/articleController';
import auth from '../middleware/auth';

const app = express();

// employees routes
app.post('/api/v1/auth/signup', userContoller.signup);
app.post('/api/v1/auth/signin', userContoller.signin);

// articles routes
app.post('/api/v1/articles', auth, articlesController.createArticle);

export default app;
