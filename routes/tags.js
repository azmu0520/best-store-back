const router = require('express').Router();
const { getAllTags, createTags } = require('../controllers/tags');
const auth = require('../controllers/verifiedToken');

router.route('/').get(auth, getAllTags).post(auth, createTags);

module.exports = router;
