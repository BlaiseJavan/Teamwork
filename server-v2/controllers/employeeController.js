import Employee from '../models/employee';
import helper from '../helpers/helper';

class employeeController {
  // signup method
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
      try {
        const token = helper.generateToken(employee.id, employee.email, employee.isadmin);
        await Employee.createUser(employee);
        const newEmployee = await Employee.findEmployee(req.body.email);
        return res.status(201).json({
          status: 201,
          message: 'User sucessfuly added',
          userToken: token,
          data: newEmployee.rows[0],
        });
      } catch (errors) {
        return res.status(400).json({
          status: 400,
          message: errors,
        });
      }
    } else {
      return res.status(409).json({
        status: 409,
        message: 'the email exists',
      });
    }
  }

  // signin method
  static async signin(req, res) {
    const { error } = helper.validator('signin', req.body);
    if (error) {
      return helper.validationErrors(res, error);
    }
    try {
      const checkUser = await Employee.findBy('employee', req.body.email);
      if (checkUser.rowCount !== 0) {
        const checkedPassword = helper.comparePassword(
          checkUser.rows[0].password, req.body.password,
        );
        if (!checkedPassword) {
          return res.status(401).json({
            status: 401,
            massage: 'Invalid credentials',
          });
        }
        const token = await helper.generateToken(checkUser.rows[0].id,
          req.body.email, checkUser.rows[0].isadmin);
        const newEmployee = await Employee.findEmployee(req.body.email);
        return res.status(200).json({
          status: 200,
          massage: 'User is successfully logged in',
          token,
          data: newEmployee.rows[0],
        });
      }
      return res.status(404).json({
        status: 404,
        massage: 'user with the email not found',
      });
    } catch (errors) {
      return res.status(400).json({
        status: 400,
        massage: errors,
      });
    }
  }
}

export default employeeController;
