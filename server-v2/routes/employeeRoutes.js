import express from 'express';
import employeeController from '../controllers/employeeController';
import validator from '../middleware/validator';

const router = express();

// employees routes
router.post('/signup', validator.employee, employeeController.signup);
router.post('/signin', validator.signin, employeeController.signin);

export default router;
