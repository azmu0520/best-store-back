const Collection = require('../modules/collection');

// Get All Collections
exports.getAllCollections = async (req, res) => {
  try {
    const collection = await Collection.find({})
      .populate('createdBy', ['first_name', 'last_name'])
      .exec();
    // const collections = await collection.populate('createdBy');
    res.status(200).json({ status: 'success', data: collection });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get a user related collection
exports.getSingleCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params._id)
      .populate('items')
      .exec();
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
  const { name, topic, image, description, createdBy } = req.body;
  const collection = new Collection({
    name,
    topic,
    image,
    description,
    createdBy,
  });
  try {
    await (
      await collection.save()
    ).populate('createdBy', ['first_name', 'last_name']);
    res.status(201).json({ status: 'success', message: collection });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.editCollection = async (req, res) => {
  try {
    const editedCollection = await Collection.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    )
      .populate('createdBy', ['first_name', 'last_name'])
      .exec();
    if (!editedCollection) {
      return res.status(404).json({
        status: 'fail',
        message: 'Collection not found!',
      });
    }
    res.status(200).json({
      status: 'success',
      data: editedCollection,
    });
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
