const User = require('../modules/user');
const jwt = require('jsonwebtoken');
module.exports = async function (req, res, next, role = false) {
  const token = req.header('auth-token');
  try {
    if (!token)
      return res
        .status(403)
        .json({ status: 'fail', message: 'Token not found' });
    const isAdmin = await User.findOne({ email: req.body.email });

    if (isAdmin.admin !== role) {
      return res.status(403).json({ status: 'fail', message: 'Forbidden' });
    }
    const verified = jwt.verify(token, process.env.JWT_HACK);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
