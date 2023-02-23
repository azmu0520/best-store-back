const Topic = require('../modules/topic');
const User = require('../modules/user');
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({ status: 'seccess', data: topics });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// create new Topic
exports.createTopic = async (req, res) => {
  const { topicName, adminID } = req.body;
  const topic = new Topic({ topicName, adminID });
  try {
    const isAdmin = await User.findById(adminID);
    if (!isAdmin.admin) {
      return res.status(403).json({ status: 'fail', message: 'Forbidden' });
    }
    await topic.save();
    res.status(201).json({ status: 'success', message: 'New Topic created!' });
  } catch (error) {
    if (error.code) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Topic Already exist' });
    }

    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
