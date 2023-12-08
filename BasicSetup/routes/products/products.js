const express = require("express");
const {
  addNewProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProduct,
} = require("./controllers/products");

const route = express.Router();

route.get("/getAllProducts", getAllProducts);

route.get("/getProduct/:productId", getProduct);

route.route("/:productId").put(updateProduct).delete(deleteProduct);

route.post("/addNewProduct", addNewProduct);

module.exports = route;
