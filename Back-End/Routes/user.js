import express from "express";
import Verification from '../middleware/jwt.js';
import {
  createUser,
  getAllAdmins,
  getAllViewers,
  getAllCreators,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../Controllers/User.js";

const router = express.Router();

//Create
router.post("/", createUser);

// Get all users
router.get("/", Verification.verifyLogin, Verification.verifyAdmin, getAllUsers);

// Get all Admins
router.get("/admins", Verification.verifyLogin, Verification.verifyAdmin, getAllAdmins);

// Get all Viewers
router.get("/viewers", Verification.verifyLogin, Verification.verifyAdmin, getAllViewers);

// Get all Creators
router.get("/creators", Verification.verifyLogin, Verification.verifyAdmin, getAllCreators);

// Get single user
router.get("/:id", Verification.verifyLogin, Verification.verifyAdmin, getUserById);

// Update user
router.patch("/:id", Verification.verifyLogin, Verification.verifyAdmin, updateUser);

// Delete user
router.delete("/:id", Verification.verifyLogin, Verification.verifyAdmin, deleteUser);

export default router;
