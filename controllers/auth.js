const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modules/user');

// Regsiter user

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Password not match' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_HACK);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
