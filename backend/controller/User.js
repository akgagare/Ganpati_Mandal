
const jwt    = require('jsonwebtoken');
const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password,phone,amount,mode } = req.body;

    const searchUser = await User.find({name:name});
    if(searchUser.length > 0){
      return res.status(501).json({message:"User already exists"});
    }

    const userDoc = await User.create({
      name,
      email,
      password,
      phone,
      amount,
      mode
    });

    const token = jwt.sign({ user_id: userDoc._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    console.log("Request:",userDoc._id);
    res.status(201).json({ message: "Admin created Successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("Missing email or password");
      return res.status(400).json({ message: "Email and password are required" });
    }

    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.status(404).json({ message: "User not registered" });
    }

    if (password !== findUser.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ user_id: findUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json({ message: "Login Successful", token });
    nav
  } catch (error) {
    console.error("Error in Login", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};