const express = require("express");
const router = express.Router();
const auth = require("../controllers/verifiedToken");
const {
  getAllCollections,
  createCollection,
  deleteCollection,
  editCollection,
  getSingleCollection,
} = require("../controllers/collection");
// ready to deploy
router.route("/").get(getAllCollections).post(auth, createCollection);

router.route("/user").get(auth, getSingleCollection);
router
  .route("/:_id")
  .patch(auth, editCollection)
  .delete(auth, deleteCollection);

module.exports = router;
