import Product from "../Models/Product.js";

//Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

//get Single product
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

//Create new product
export const createProduct = async (req, res) => {
  const { title, description, category, price, supplier } = req.body;

  try {
    if (!title || !description || !category || !price || !supplier) {
      return res.status(400).json({ error: "enter required fields" });
    }
    const newProduct = await Product.create({
      title,
      description,
      category,
      price,
      supplier,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating the product" });
  }
};

//delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.destroy({ where: { id } });
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the product" });
  }
};

//Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = Product.update({ ...req.body }, { where: { id } });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
