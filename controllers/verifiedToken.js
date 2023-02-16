const User = require('../modules/user');
const jwt = require('jsonwebtoken');
module.exports = async function (req, res, next, role) {
  const token = req.header('auth-token');
  try {
    if (!token) return res.status(401).send('Access Denied');
    const isAdmin = await User.findOne({ email: req.body.email });
    console.log(isAdmin);
    if (isAdmin.admin !== role) {
      return res.status(403).json({ status: 'fail', message: 'Frobidden' });
    }
    const verified = jwt.verify(token, process.env.JWT_HACK);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
