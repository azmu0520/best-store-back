const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Collection',
      required: true,
    },
  },
  { strict: false }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
