import moment from 'moment';
import db from '../config/connection';


class Employee {
  constructor(firstname, lastname, email, username, password, address, gender, jobrole,
    department) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
    this.gender = gender;
    this.jobrole = jobrole;
    this.department = department;
    this.isadmin = false;
    this.createdon = moment().format('YYYY-MM-DD');
  }

  static async createUserTable() {
    const result = await db.query(`
          CREATE TABLE IF NOT EXISTS employee (
              id SERIAL PRIMARY KEY,
              firstname text,
              lastname text,
              email text UNIQUE,
              address text,
              gender text,
              jobrole text,
              department text,
              isadmin boolean,
              username text,
              password text,
              createdon date
          )`);
    return result;
  }

  static async createUser(data) {
    const result = await db.query(`INSERT INTO employee(firstname, lastname, email, username, password, address, gender, jobrole,
        department, isadmin, createdon) VALUES(
        '${data.firstname}',
        '${data.lastname}',
        '${data.email}',
        '${data.username}',
        '${data.password}',
        '${data.address}',
        '${data.gender}',
        '${data.jobrole}',
        '${data.department}',
        '${data.isadmin}',
        '${data.createdon}'
        ) returning *;
      `);

    return result;
  }

  static async CleanEmployee() {
    const result = await db.query('DELETE FROM employee;');
    return result;
  }

  static async selectCount(table, column, value) {
    const result = await db.query(`SELECT COUNT(1) FROM ${table} WHERE ${column} = '${value}';`);
    return result;
  }

  static async findEmployee(email) {
    const result = await db.query(`SELECT firstname, lastname, username, email FROM employee WHERE email='${email}';`);
    return result;
  }

  static async findBy(colomn, value) {
    const result = await db.query(`SELECT * FROM employee WHERE ${colomn}='${value}';`);
    return result;
  }

  static async updateProfile(id, data) {
    const result = await db.query(`UPDATE employee SET address='${data.address}', 
    gender='${data.gender}', jobrole='${data.jobrole}', 
    department='${data.department}' WHERE id='${id}';`);

    return result;
  }
}
export default Employee;
