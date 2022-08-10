import asyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const userExists = await UserModel.findOne({ username });
  if (userExists && (await userExists.matchPassword(password))) {
    res.json({
      _id: userExists._id,
      username: userExists.username,
      token: generateToken(userExists._id),
    });
  } else {
    console.log("skjaklslkl");
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const userExists = await UserModel.findOne({ username });
  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

export { authUser, registerUser };
