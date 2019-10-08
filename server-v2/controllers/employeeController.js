import Employee from '../models/employee';
import helper from '../helpers/helper';

class employeeController {
  static async signup(req, res) {
    const { error } = helper.validator('employee', req.body);
        if (error) {
            return helper.validationErrors(res, error);
        }
    
    const result = await Employee.selectCount('employee', 'email', req.body.email);
    if (result.rows[0].count === '0') {
      const employee = new Employee(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.username,
        helper.hashPassword(req.body.password),
      );
      try{
        const token = helper.generateToken(employee.id, employee.email, employee.isadmin);
         await Employee.createUser(employee); 
         const newEmployee = await Employee.findEmployee(req.body.email);
          return res.status(201).json({
            status: 201,
            message: 'User sucessfuly added',
            userToken: token,
            data: newEmployee.rows[0]
            });
          } catch (error) {
             return  res.status(400).json({
               status:400,
               message: error,
             });
            }
       } else {
        return res.status(409).json({
          status: 409,
          message: 'the email exists',
        });
       }
   }
}

export default employeeController;
