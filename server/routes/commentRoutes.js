import express from 'express';
import auth from '../middleware/auth';
import CommentController from '../controllers/commentController';

const app = express();

// comment routes
app.post('/api/v1/articles/:id/comments', auth, CommentController.createComment);


export default app;
