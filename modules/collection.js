const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  auther: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: false,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  custom_fields: {
    type: Object,
    required: false,
  },
  // comments: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Comment',
  //   },
  // ],
  // likes: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Like',
  //   },
  // ],
  tags: {
    type: Array,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;

// {
//     "user_id": ,
//     "name": ,
//     "topic": ,
//     "image": ,
//     "description" ,
// }

// 6358c5ca140cd275a9ccee5f
