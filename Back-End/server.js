import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sequelize from "./config/Connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import Product from "./Routes/Product.js"
import User from "./Routes/user.js"

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.use("/api/product", Product);
app.use("/api/user", User);

sequelize.sync({ force: false, alter: true }); //will change alter or force to true when needed

app.listen(PORT, () => {
  console.log("DB Connected & Listening for requests on port: ", PORT);
});