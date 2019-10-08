import express from 'express';
import employeeController from '../controllers/employeeController';

const router = express();

// employees routes
router.post('/signup', employeeController.signup);

export default router;
