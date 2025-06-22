                          //Register Logic

const userModel = require('../models/User.model.js');
const userService = require('../services/user.service.js')
const {validationResult}= require('express-validator')
const blacklistToken = require('../models/blacklistToken.model.js'); // ✅ Import blacklist model


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });  // ✅ resizeBy → res
    }

    console.log(req.body);

    const { fullname, email, password } = req.body;

    // ✅ Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
    }

    // ✅ Hash the password
    const hashPassword = await userModel.hashPassword(password);

    // ✅ Create the user
    const user = await userService.createUSer({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    });

    // ✅ Generate auth token
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  // ✅ Set cookie with proper options
  res.cookie('token', token)
  // ✅ Optional: return token in body too (for testing)
  res.status(200).json({ message: "Login successful", user });
};
 

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user); // ✅ Use req.user set by auth middleware
};

module.exports.logoutUser = async (req, res, next) => {
    // ✅ Clear the cookie
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // ✅ Add token to blacklist
    await blacklistToken.create({ token });
    res.status(200).json({ message: "Logout successful" });
}

