const Collection = require("../modules/collection");
const jwt = require("jsonwebtoken");

// Get All Collections
exports.getAllCollections = async (req, res) => {
  try {
    let collections = await Collection.find()
      .populate("createdBy", ["first_name", "last_name"])
      .exec();

    if (req.query?.filter) {
      collections = collections.filter((collection) =>
        req.query?.filter === "All"
          ? true
          : collection?.name[0].toUpperCase() === req.query?.filter
      );
    }
    // const collections = await collection.populate('createdBy');
    res.status(200).json({ status: "success", data: collections });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// Get a user related collection
exports.getSingleCollection = async (req, res) => {
  const token = req.header("auth-token");
  const verified = jwt.verify(token, process.env.JWT_HACK);
  try {
    const populatedCollection = await Collection.find()
      .populate("createdBy", ["first_name", "last_name"])
      .exec();
    let collection = populatedCollection.filter(
      ({ createdBy }) => createdBy._id == verified.id
    );
    if (!collection) {
      return res.status(404).json({
        status: "fail",
        message: "Collection not found!",
      });
    }
    if (req.query?.filter) {
      collection = collection.filter((item) =>
        req.query?.filter === "All"
          ? true
          : item?.name[0].toUpperCase() === req.query?.filter
      );
    }
    if (req.query?.sort) {
      collection = collection.filter((item) =>
        req.query?.sort === "All" ? true : item?.topic === req.query?.sort
      );
    }
    res.status(200).json({
      status: "success",
      data: collection,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// create new Collection
exports.createCollection = async (req, res) => {
  const { name, topic, image, description, createdBy } = req.body;
  const token = req.header("auth-token");
  const verified = jwt.verify(token, process.env.JWT_HACK);
  const collection = new Collection({
    name,
    topic,
    image,
    description,
    createdBy: verified.id,
  });
  try {
    await (
      await collection.save()
    ).populate("createdBy", ["first_name", "last_name"]);
    res
      .status(201)
      .json({ status: "success", message: "Collection successfully created" });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// edit Collection

exports.editCollection = async (req, res) => {
  try {
    const editedCollection = await Collection.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!editedCollection) {
      return res.status(404).json({
        status: "fail",
        message: "Collection not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Collection successfully edited !",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

// delete collection

exports.deleteCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params._id);
    if (!collection) {
      return res.status(404).json({
        status: "fail",
        message: "Collection not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Collection deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
