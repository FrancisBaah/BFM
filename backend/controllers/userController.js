const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

// Get the next parent in a breadth-first manner
const getNextParent = async () => {
  // Get all users sorted by registration order
  const users = await User.find().sort({ _id: 1 }).exec();

  // Find the first user with less than 3 children
  for (let user of users) {
    if (user.children.length < 3) {
      return user;
    }
  }
  return null;
};

const getUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, type } = req.body;
  if ((!name, !email)) {
    res.status(401);
    throw new Error("name and email required");
  }

  // Find the next parent
  let parent = await getNextParent();

  // Create the new user
  const newUser = new User({
    name,
    email,
    type,
    parent: parent ? parent._id : null, // If no parent, this user is the root
  });

  // Save the new user
  await newUser.save();

  // Update the parent's children if there is a parent
  if (parent) {
    parent.children.push(newUser._id);
    await parent.save();
  }
  res.status(200).json(newUser);
});

const UpdateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(401);
    throw new Error("User does not exist");
  }
  const { name, email, type } = req.body;
  const update = await User.findByIdAndUpdate(name, email, type, { new: true });
  res.status(200).json(update);
});
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(401);
    throw new Error("User does not exist");
  }
  user.deleteOne();
  res.status(200).json(user);
});
module.exports = { getUser, registerUser, deleteUser, UpdateUser };
