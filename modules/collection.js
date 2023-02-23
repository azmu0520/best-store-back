const mongoose = require('mongoose');
const Topic = require('./topic');

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
    image: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
    },
    topic: {
      type: String,
      enum: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Topic',
        },
      ],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
