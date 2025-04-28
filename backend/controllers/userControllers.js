import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import TryCatch from "../utils/TryCatch.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.status(400).json({
      message: "Already have an account with this email",
    });
  const hashPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  generateToken(user._id, res);
  res.status(201).json({
    user,
    message: "User Registered",
  });
});

export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "No user with this email",
    });
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }
  generateToken(user._id, res);
  res.json({
    user,
    message: "Logged in successfully",
  });
});

export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user);
});
