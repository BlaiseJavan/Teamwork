import express from 'express';
import employee from './employeeRoutes';
import article from './articleRoutes';

const app = express();

// all routes
app.use('/api/v2/auth', employee);
app.use('/api/v2/articles', article);

export default app;
