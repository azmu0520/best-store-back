const Collection = require("../modules/collection");
const Item = require("../modules/item");

// Get All Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ status: "success", data: items });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// create new Item
exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    await Collection.findByIdAndUpdate(
      req.body.collectionId,
      {
        $push: { items: item },
      },
      { new: true }
    );
    await item.save();
    res
      .status(201)
      .json({ status: "success", message: "Item Edited Successfully!" });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getSingleItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params._id).lean().exec();
    if (!item) {
      return res
        .status(404)
        .json({ status: "fail", message: "Item not found" });
    }
    return res.status(200).json({ status: 200, data: item });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// edit Item
exports.editItem = async (req, res) => {
  try {
    const editedItem = await Item.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (!editedItem) {
      return res.status(404).json({
        status: "fail",
        message: "Item not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Item Edited Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// delete item

exports.deleteItem = async (req, res) => {
  try {
    const Item = await Item.findByIdAndDelete(req.params._id);
    if (!Item) {
      return res.status(404).json({
        status: "fail",
        message: "Item not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
