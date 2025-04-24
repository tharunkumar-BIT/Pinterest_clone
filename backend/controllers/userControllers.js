import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
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

    res.status(201).json({
        user,
        message: "User Registered"
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
