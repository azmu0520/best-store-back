const router = require('express').Router();
const { getAllTopics, createTopic } = require('../controllers/topic');
const auth = require('../controllers/verifiedToken');

router.route('/').get(auth, getAllTopics).post(createTopic);

module.exports = router;
