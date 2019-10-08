import db from '../config/connection';

class EmployeeDb {
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
}

export default EmployeeDb;