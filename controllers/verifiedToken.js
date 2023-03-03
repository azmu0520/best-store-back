const User = require("../modules/user");
const jwt = require("jsonwebtoken");
module.exports = async function (req, res, next, role = false) {
  const token = req.header("auth-token");
  try {
    if (!token)
      return res
        .status(403)
        .json({ status: "fail", message: "Token not found" });

    const verified = jwt.verify(token, process.env.JWT_HACK);
    req.user = verified;
    const user = await User.findById(verified.id);
    if (role && user.admin) {
      return res.status(403).json({ status: "fail", message: "Forbidden" });
    }
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
