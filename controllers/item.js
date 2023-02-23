const Collection = require('../modules/collection');
const Item = require('../modules/item');

// Get All Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ status: 'success', data: items });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// create new Item
exports.createItem = async (req, res) => {
  const { name, collectionId } = req.body;
  console.log(req.body);
  const item = new Item(req.body);
  try {
    const collection1 = await Collection.findById(collectionId);
    await Collection.findByIdAndUpdate(
      collectionId,
      {
        items: [...collection1.items, item],
      },
      { new: true }
    );
    await item.save();
    res.status(201).json({ status: 'success', message: item });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
