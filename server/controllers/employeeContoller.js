import employees from '../models/employees';
import helper from '../helpers/helper';
import validator from '../helpers/employeeValidator';
import loginValidator from '../helpers/loginValidator';

class userController {
  // signup methode
  static signup(req, res) {
    const empId = employees.length + 1;
    const {
      firstname, lastname, email, password, gender, phonenumber, jobRole, department, address,
    } = req.body;
    const newEmployee = validator.validate({
      // eslint-disable-next-line max-len
      id: empId, firstname, lastname, email, password: helper.hashPassword(password), gender, phonenumber, jobRole, department, address,
    });
    if (!newEmployee.error) {
      const existEmail = employees.find((e) => e.email === email);
      if (!existEmail) {
        const token = helper.generateToken(empId);

        employees.push(newEmployee.value);
        return res.status(201).json({
          status: 201,
          token,
          data: newEmployee.value,
        });
      }
      return res.status(409).json({
        status: 409,
        message: 'the email is already exist',
      });
    }
    const validationError = newEmployee.error.details[0].message.replace('"', ' ').replace('"', '');
    return res.status(400).json({
      status: 400,
      message: validationError,
    });
  }

  // signin method
  static signin(req, res) {
    const {
      email, password,
    } = req.body;
    const user = loginValidator.validate({ email, password });
    if (!user.error) {
      const checkUser = employees.find((e) => e.email === email);
      if (checkUser) {
        const checkedPassword = helper.comparePassword(checkUser.password, password);
        if (!checkedPassword) {
          return res.status(401).json({
            status: 401,
            massage: 'Invalid credentials',
          });
        }
        return res.status(200).json({
          status: 200,
          massage: 'User is successfully logged in',
          data: checkUser,
        });
      }
      return res.status(400).json({
        status: 400,
        massage: 'user with the email not found',
      });
    }
    const validationError = user.error.details[0].message.replace('"', ' ').replace('"', '');
    return res.status(401).json({
      status: 401,
      message: validationError,
    });
  }
}

export default userController;
