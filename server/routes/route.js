import express from 'express';
import userContoller from '../controllers/employeeContoller';

const app = express();

// employees routes
app.post('/api/v1/auth/signup', userContoller.signup);

export default app;
