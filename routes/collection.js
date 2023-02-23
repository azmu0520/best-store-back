const express = require('express');
const router = express.Router();
const auth = require('../controllers/verifiedToken');
const {
  getAllCollections,
  createCollection,
  deleteCollection,
  editCollection,
  getSingleCollection,
} = require('../controllers/collection');

router.route('/').get(getAllCollections).post(auth, createCollection);

router
  .route('/:_id')
  .get(auth, getSingleCollection)
  .patch(auth, editCollection)
  .delete(auth, deleteCollection);

module.exports = router;
