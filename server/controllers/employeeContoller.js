import employees from '../models/employees';
import helper from '../helpers/helper';
import validator from '../helpers/employeeValidator';

class userController {
  // signup methode
  static signup(req, res) {
    const empId = employees.length + 1;
    const {
      firstname, lastname, email, password, gender, phonenumber, jobRole, department, address,
    } = req.body;
    const existEmail = employees.find((e) => e.email === email);
    if (!existEmail) {
      const token = helper.generateToken(empId);
      const newEmployee = validator.validate({
        // eslint-disable-next-line max-len
        jwt: token, id: empId, firstname, lastname, email, password: helper.hashPassword(password), gender, phonenumber, jobRole, department, address,
      });
      if (!newEmployee.error) {
        employees.push(newEmployee.value);
        return res.status(201).json({
          status: 201,
          data: newEmployee.value,
        });
      }
      const validationError = newEmployee.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(401).json({
        status: 401,
        error: validationError,
      });
    }
    return res.status(400).json({
      status: 400,
      error: 'the email is already exist',
    });
  }
}

export default userController;
