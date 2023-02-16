const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  secret: jwtSecret,
};

const generateJwtToken = (payload) => {
  return jwt.sign(payload, jwtConfig.secret);
};

module.exports = {
  jwtConfig,
  generateJwtToken,
};
