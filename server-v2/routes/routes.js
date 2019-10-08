import express from 'express';
import employee from './employeeRoutes';

const app = express();

// all routes
app.use('/api/v2/auth', employee);

export default app;
