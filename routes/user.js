const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  blockUser,
  unBlockUser,
  deleteUser,
} = require('../controllers/user');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:_id').get(getUser).patch(updateUser).delete(deleteUser);

router.route('/block/:_id').patch(blockUser);
router.route('/unblock/:_id').patch(unBlockUser);

module.exports = router;
