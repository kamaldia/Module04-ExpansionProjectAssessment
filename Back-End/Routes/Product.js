import express from "express";
import Verification from '../middleware/jwt.js';

import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct

} from "../Controllers/Product.js";

const router = express.Router();

//get all products
router.get("/", Verification.verifyLogin, getAllProducts);

//get single product
router.get("/:id", Verification.verifyLogin, getProductById);

//create product
router.post("/", Verification.verifyLogin, Verification.verifyCreator, createProduct);

//delete product
router.delete("/:id", Verification.verifyLogin, Verification.verifyCreator, deleteProduct);

//edit product
router.put("/:id", Verification.verifyLogin, Verification.verifyCreator, updateProduct);

export default router;
