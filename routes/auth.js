const router = require('express').Router();

const { registerUser, loginUser } = require('../controllers/auth');

router.route('/login').post(loginUser);

router
  .route('/registerAdmin')
  .post((req, res, next) => registerUser(req, res, next, true));

router
  .route('/register')
  .post((req, res, next) => registerUser(req, res, next, false));
module.exports = router;
