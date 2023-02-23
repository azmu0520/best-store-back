const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  topicName: {
    type: String,
    required: true,
    unique: true,
  },
  adminID: {
    type: String,
    required: true,
  },
});

const Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;
