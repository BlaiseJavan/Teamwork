import employeeDb from './employeeDb';
import helper from '../helpers/helper';
import Employee from '../models/employee';

const createTables = async () => {
  const password = helper.hashPassword('admin');

  await employeeDb.createUserTable();
  await employeeDb.CleanEmployee();

  const employee = new Employee(
    'admin',
    'admin',
    'admin@gmail.com',
    'kigali',
    'male',
    'developer',
    'IT',
    true,
    'admin',
    password,
  );

  await employeeDb.createUser(employee);
};
createTables();

export default createTables;
