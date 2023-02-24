const router = require('express').Router();
const {
  getAllItems,
  createItem,
  editItem,
  deleteItem,
} = require('../controllers/item');
const auth = require('../controllers/verifiedToken');

router
  .route('/')
  .get((req, res, next) => auth(req, res, next, true), getAllItems)
  .post(auth, createItem);

router.route('/:_id').patch(auth, editItem).delete(auth, deleteItem);
module.exports = router;
