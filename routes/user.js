const express = require('express');
const router = express.Router();
const auth = require('../controllers/verifiedToken');
const {
  getAllUsers,
  getUser,
  updateUser,
  blockUser,
  unBlockUser,
  deleteUser,
} = require('../controllers/user');

router
  .route('/')
  .get((req, res, next) => auth(req, res, next, true), getAllUsers);

router.route('/:_id').get(getUser).patch(updateUser).delete(deleteUser);

router.route('/block/:_id').patch(blockUser);
router.route('/unblock/:_id').patch(unBlockUser);

module.exports = router;
