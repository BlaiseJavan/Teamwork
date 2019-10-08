import moment from 'moment';
import uuid from 'uuid/v1';
import db from '../config/connection';


class Employee {
  constructor(firstname, lastname, email, username, password, address, gender, jobrole,
    department) {
    this.id = uuid();
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
              id UUID PRIMARY KEY,
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
    const result = await db.query(`INSERT INTO employee(id, firstname, lastname, email, username, password, address, gender, jobrole,
        department, isadmin, createdon) VALUES('${data.id}',
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

    return result.error;
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

  static async findBy(colomn, email) {
    const result = await db.query(`SELECT * FROM ${colomn} WHERE email='${email}';`);
    return result;
  }
}

export default Employee;
