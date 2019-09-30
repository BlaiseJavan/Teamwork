import tokens from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt-nodejs';

dotenv.config();

class helper {
  static generateToken(id) {
    const token = tokens.sign({ id }, process.env.secret);
    return token;
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default helper;
