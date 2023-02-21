const express = require('express');
const router = express.Router();
const auth = require('../controllers/verifiedToken');
const {
  getAllCollections,
  getUsersCollection,
  createCollection,
  deleteCollection,
  editCollection,
} = require('../controllers/collection');

router.route('/').get(getAllCollections).post(auth, createCollection);

router
  .route('/:_id')
  .get(auth, getUsersCollection)
  .patch(auth, editCollection)
  .delete(auth, deleteCollection);

module.exports = router;
