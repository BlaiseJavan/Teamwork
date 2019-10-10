import helper from '../helpers/helper';
import Employee from '../models/employee';
import Article from '../models/article';

const createTables = async () => {
  const password = helper.hashPassword('admin');

  await Employee.createUserTable();
  await Article.createArticleTable();
  await Employee.CleanEmployee();

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

  await Employee.createUser(employee);
};
createTables();

export default createTables;
