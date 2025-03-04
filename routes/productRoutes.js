const express = require("express");
const route = express.Router();

const {
  allProduct,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { post } = require("./contactRoutes");

router.route("/").get(allProduct).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
