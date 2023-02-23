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

router.route('/').get(getAllUsers);

router.route('/:_id').get(getUser).patch(updateUser).delete(deleteUser);

router.route('/block/:_id').patch(blockUser);
router.route('/unblock/:_id').patch(unBlockUser);

module.exports = router;

// 63f3826e994a769bb5e15a1e
