const bcrypt = require("bcrypt");
const User = require("../models/users.model");
const passwordValidator = require("../utils/passwordValidator");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "username, email and password are required" });
  }
  const existedEmail = await User.findOne({email});
  if (existedEmail) {
    return res.status(409).json({ meesage: "Email is already existed" });
  }
  if (!passwordValidator(password)) {
    return res.status(400).json({ message: "weak Password" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username: username,
    email: email,
    password,
    hashedPassword,
  });

  await newUser.save();
  res.status(201).json({
    message: "Signup successful",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};
const signin = (req, res) => {
  res.send("Sign-in Page");
};

module.exports = { signup, signin };
