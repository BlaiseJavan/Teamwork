import express from 'express';
import employeeController from '../controllers/employeeController';

const router = express();

// employees routes
router.post('/signup', employeeController.signup);
router.post('/signin', employeeController.signin);

export default router;
