import User from "../Models/User.js";
import bcrypt from "bcrypt";

//for bcrypt
const saltRounds = 10;

//create user
const createUser = async (req, res) => {
  const { username, password } = req.body;

  const hashed_password = bcrypt.hashSync(password, saltRounds);

  try {
    const newUser = await User.create({ username, password: hashed_password });
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
};

// Get all admins only
const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.findAll({
      where: { role: "admin" },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve admin users" });
  }
};

// Get all creators only
const getAllCreators = async (req, res) => {
  try {
    const creators = await User.findAll({
      where: { role: "creator" },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(creators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve creators" });
  }
};

// Get all normal users
const getAllViewers = async (req, res) => {
  try {
    const viewers = await User.findAll({
      where: { role: "user" },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(viewers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve normal users" });
  }
};

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve user users" });
  }
};

// Get by ID
const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the requested user" });
  }
};

// Update user
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const [updated] = await User.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Failed to update user" });
    }

    const updatedUser = await User.findOne({ where: { id } });

    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the user" });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await User.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the user" });
  }
};

export {
  createUser,
  getAllAdmins,
  getAllViewers,
  getAllCreators,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
