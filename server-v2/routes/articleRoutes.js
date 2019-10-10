import express from 'express';
import articlesController from '../controllers/articleController';
import auth from '../middleware/auth';
import validator from '../middleware/validator';

const router = express();

// articles routes
router.post('/', validator.article, auth, articlesController.createArticle);
router.get('/', auth, articlesController.viewAllArticles);

export default router;
