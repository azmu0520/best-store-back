const router = require('express').Router();

const { registerUser, loginUser } = require('../controllers/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router
  .route('/registerAdmin')
  .post((req, res, next) => registerUser(req, res, next, true));

module.exports = router;
