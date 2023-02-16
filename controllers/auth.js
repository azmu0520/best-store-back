const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modules/user');

// Regsiter user

exports.registerUser = async (req, res, next, admin) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const emailExist = await User.findOne({ email: email });
    console.log(email);
    if (emailExist) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Email already in use' });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: passwordHash,
      admin,
    });
    await newUser.save();
    res
      .status(201)
      .json({ status: 'success', message: 'Successfully Registered' });
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
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error,
    });
  }
};
