const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  // createProduct,
  // getProduct,
  // updateProduct,
  // deleteProduct,
} = require("../controllers/productController");
// const { post } = require("./contactRoutes");

 router.route("/").get(getAllProduct);
// .post(createProduct);
// router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
