const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Tags = mongoose.model('Tags', tagsSchema);

module.exports = Tags;
