import express from 'express';
import employee from './employeeRoutes';
import article from './articleRoutes';
import comment from './commentRoutes';

const app = express();

// app.all("*", auth)

// all routes
app.use('/api/v1/auth', employee);
app.use('/api/v1/articles', article);
app.use('/api/v1/comments', comment);

export default app;
