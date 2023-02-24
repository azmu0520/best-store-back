const Tags = require('../modules/tags');

exports.createTags = async (req, res) => {
  const newTag = new Tags(req.body);
  try {
    await newTag.save();
    res.status(201).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tags.find();
    res.status(200).json({ status: 'success', data: tags });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
