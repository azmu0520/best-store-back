const User = require('../modules/user');

// Get all users    // working
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('collection');
    if (!users) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'No user found in database' });
    }
    res.status(200).json({ status: 'success', data: users });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get a single user  // working
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found!',
      });
    }
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// create new User // working
exports.createUser = async (req, res) => {
  // Check if a user email is exist
  const isEmailTaken = await User.findOne({ email: req.body.email });
  if (isEmailTaken) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Email already in use' });
  }
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await user.save();
    res.status(201).json({ status: 'success', message: 'New user created' });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// Update user // working but dublication is being error
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params._id, req.body);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found!',
      });
    }
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// block user   // working
exports.blockUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params._id,
      { status: false },
      { new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }
    return res
      .status(200)
      .json({ status: 'success', message: 'User blocked successfully' });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// unblock    // working
exports.unBlockUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params._id,
      { status: true },
      { new: true }
    );
    if (!user) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }
    return res
      .status(200)
      .json({ status: 'success', message: 'User unblocked successfully' });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};

// delete   // working
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params._id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found!',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
