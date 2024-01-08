import { DataTypes } from "sequelize";
import sequelize from "../config/Connection.js";

const User = sequelize.define("Users", {

  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: { //only for admins
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user', 'creator'),
    defaultValue: 'user',
  },
});

export default User;
