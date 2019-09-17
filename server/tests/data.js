const newEmployee = {
  email: 'blaise@gmail.com',
  firstname: 'blaise',
  lastname: 'irakoze',
  address: 'kigali',
  phonenumber: '+250788211579',
  password: 'blaise',
  jobRole: 'developer',
  gender: 'male',
  department: 'IT',
};

const wrongNewEmployee = {
  lastname: 'irakoze',
  email: 'blais2e@gmail.com',
  password: 'blaise',
  gender: 'male',
  phonenumber: '078821157',
  jobRole: 'developer',
  department: 'IT',
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

const otherEmployee = {
  email: 'blaise1@gmail.com',
  password: 'blaise',
};

const newArticle = {
  title: 'article1',
  article: 'Checking the network cables, modem, and router',
  userId: 1,
};

const wrongArticle = {
  article: 'Checking the network cables, modem, and router',
  userId: 1,
};

const edArticle = {
  title: 'article1',
  article: 'Checking the network cables',
  userId: 1,
};

const id = 1;

const wrongId = 3284;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4NDY3MjgxLCJleHAiOjE1NjkwNzIwODF9.5oAPdwsQM5f9PnR_arUoSdeCUDUswm48I8X-H2zirc4';

const wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4NDY3MjgxLCJl';

export {
  wrongNewEmployee,
  newEmployee,
  employee,
  wrongEmployee,
  otherEmployee,
  newArticle,
  wrongArticle,
  edArticle,
  id,
  wrongId,
  token,
  wrongToken,
};
