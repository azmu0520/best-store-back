const express = require('express');
const router = express.Router();

const {
  getAllCollections,
  getUsersCollection,
  createCollection,
  deleteCollection,
} = require('../controllers/collection');

router.route('/').get(getAllCollections).post(createCollection);

router.route('/:_id').get(getUsersCollection).delete(deleteCollection);

module.exports = router;
