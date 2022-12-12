const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER
const register = async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error || "could not save user");
  }
};


//LOGIN
const login = async (req, res) => {
  const { email, inputPassword } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      email,
    });
  } catch (error) {
    res.status(500).json(error || "Logging In Failed. Please Try Again Later.");
  }

  !existingUser && res.status(401).json("Wrong Email");

  const hashedPassword = CryptoJS.AES.decrypt(
    existingUser.password,
    process.env.PASS_SEC
  );

  const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

  originalPassword != inputPassword && res.status(401).json("Wrong Password");


  //IF EVERYTHING MATCHES
  const { password, ...others } = existingUser._doc;
  res.status(200).json({ ...others });
};

exports.register = register;
exports.login = login;
