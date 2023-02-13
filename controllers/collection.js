const Collection = require('../modules/collection');

// Get All Collections
exports.getAllCollections = async (req, res) => {
  try {
    const collection = await Collection.find();
    if (!collection) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'No collection found in database' });
    }
    res.status(200).json({ status: 'success', data: collection });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get a user related collection
exports.getUsersCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params._id);
    if (!collection) {
      return res.status(404).json({
        status: 'fail',
        message: 'Collection not found!',
      });
    }
    res.status(200).json({
      status: 'success',
      data: collection,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// create new Collection
exports.createCollection = async (req, res) => {
  const collection = new Collection({
    name: req.body.name,
    topic: req.body.topic,
    image: req.body.image,
    description: req.body.description,
  });
  console.log(req.body);
  try {
    await collection.save();
    res
      .status(201)
      .json({ status: 'success', message: 'New collection created' });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params._id);
    console.log(req.params._id);
    if (!collection) {
      return res.status(404).json({
        status: 'fail',
        message: 'Collection not found!',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Collection deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
