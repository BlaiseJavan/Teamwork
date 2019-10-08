import express from 'express';
import userContoller from '../controllers/employeeContoller';
import articlesController from '../controllers/articleController';
import auth from '../middleware/auth';

const app = express();

// articles routes
app.post('/', auth, articlesController.createArticle);
app.patch('/:id', auth, articlesController.editArticle);
app.delete('/:id', auth, articlesController.deleteArticle);
app.get('/', auth, articlesController.viewAllArticles);
app.get('/:id', auth, articlesController.specificArticle);
app.get('/:tag/category', auth, articlesController.viewArticlesCategory);
app.patch('/:id/flag', auth, articlesController.flagArticle);

export default app;