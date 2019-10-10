import helper from '../helpers/helper';

const newEmployee = {
  firstname: 'blaise',
  lastname: 'blaise',
  email: 'blaise@gmail.com',
  username: 'blaise',
  password: 'blaise',
};

const wrongNewEmployee = {
  firstname: 'blaise',
  lastname: 'blaise',
  email: 'blaise2@gmail.com',
  username: 'blaise',
};

const emailExist = {
  firstname: 'blaise',
  lastname: 'blaise',
  email: 'blaise@gmail.com',
  username: 'blaise',
  password: 'blaise',
};

const employee = {
  email: 'blaise@gmail.com',
  password: 'blaise',
};

const wrongEmployee = {
  email: 'blaise@gmail.com',
  password: 'blais',
};

const requiredPass = {
  email: 'blaise@gmail.com',
};

const article = {
  title: 'Lorem ipsum dolor sit amet consectttg jbcsjshs',
  article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt sed voluptate nobis distinctio. Suscipit, ullam rerum? Omnis, molestiae hic perferendis illo laboriosam qui ducimus placeat consequatur similique aliquam sint.',
  tags: 'music',
};

const token = helper.generateToken();

export {
  wrongNewEmployee,
  newEmployee,
  emailExist,
  employee,
  wrongEmployee,
  requiredPass,
  article,
  token,
};
