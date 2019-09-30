const newEmployee = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali',
  phonenumber: '0788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'financial',
};

const invalidLastName = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'i',
  address: 'kigali',
  phonenumber: '0788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'financial',
};

const invalidAddress = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali $$%',
  phonenumber: '0788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'financial',
};

const invalidPhonenumber = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali',
  phonenumber: '+0788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'financial',
};

const invalidDepartment = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali',
  phonenumber: '0788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'r9',
};

const invalidJobRole = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali',
  phonenumber: '0788211579',
  password: 'blaise',
  jobRole: 'd',
  gender: 'male',
  department: 'financial',
};

const wrongNewEmployee = {
  firstname: 'blaise56',
  lastname: 'irakoze',
  email: 'blais2e@gmail.com',
  password: 'blaise',
  gender: 'male',
  phonenumber: '078821157',
  jobRole: 'developer',
  department: 'IT',
  address: 'kigali',
};

const InvalidNewEmployee = {
  firstname: 'blaise',
  lastname: 'irakoze',
  email: 'blaisegmail.com',
  password: 'blaise',
  gender: 'male',
  phonenumber: '0788211579',
  jobRole: 'user',
  department: 'financial',
  address: 'kigali',
};

const employee = {
  email: 'blaise@gmail.com',
  password: 'blaise',
};

const wrongEmployee = {
  email: 'blaise@gmail.com',
  password: 'blai',
};

const invalidEmployee = {
  email: 'blaisegmail.com',
  password: 'blaise',
};

const otherEmployee = {
  email: 'blaise1@gmail.com',
  password: 'blaise',
};

const newArticle = {
  title: 'article1',
  article: 'Checking the network cables, modem, and router',
};

const wrongArticle = {
  article: 'Checking the network cables, modem, and router',
  userId: 1,
};

const invalidArticle = {
  title: 'articlee222',
  article: 'Checki',
};

const edArticle = {
  title: 'article1',
  article: 'Checking the network cables',
  userId: 1,
};

const comment = {
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const invalidComment = {
  comment: 'chkabjs7',
};

const id = 1;

const wrongId = 3284;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY5NjkzNzI4fQ.1JeakDS-3bB19GnWxnpvCdubLAXoiF1FlL139bM2a-c';

const wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4NDY3MjgxLCJl';

export {
  wrongNewEmployee,
  InvalidNewEmployee,
  newEmployee,
  employee,
  wrongEmployee,
  invalidEmployee,
  otherEmployee,
  newArticle,
  wrongArticle,
  invalidArticle,
  edArticle,
  id,
  wrongId,
  token,
  wrongToken,
  invalidLastName,
  invalidAddress,
  invalidDepartment,
  invalidPhonenumber,
  invalidJobRole,
  comment,
  invalidComment,
};
