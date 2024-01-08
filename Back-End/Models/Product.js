import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";
import User from "./User.js"

const Product = sequelize.define("Products", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  supplier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//timestamps are automatically created

User.hasMany(Product);
Product.belongsTo(User);

export default Product;
