import User from "../models/User.js";

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const readUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const updateHotel = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted");
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
    console.log({ error });
  }
};