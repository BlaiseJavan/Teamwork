const moment = require('moment');
const uuid = require('uuid/v1');

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
}

export default Employee;
