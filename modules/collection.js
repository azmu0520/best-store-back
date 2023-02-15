const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema(
  {
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
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

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
