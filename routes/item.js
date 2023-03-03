const router = require("express").Router();
const {
  getAllItems,
  createItem,
  editItem,
  deleteItem,
  getSingleItem,
} = require("../controllers/item");
const auth = require("../controllers/verifiedToken");

router
  .route("/")
  .get((req, res, next) => auth(req, res, next, false), getAllItems)
  .post(auth, createItem);

router
  .route("/:_id")
  .get(getSingleItem)
  .patch(auth, editItem)
  .delete(auth, deleteItem);
module.exports = router;
