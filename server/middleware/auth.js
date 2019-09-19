import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
  const { token } = req.headers;
  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.secret, (error, data) => {
    if (error) {
      return res.status(403).json({
        status: 403,
        error: 'authantication is not valid',
      });
    }
    req.user = data;
    next();
  });
};

export default auth;
