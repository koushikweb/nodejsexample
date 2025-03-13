const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  createProduct,
   getProduct,
   updateProduct,
   deleteProduct,
} = require("../controllers/productController");
//   
// get all product and create a product
router.route("/products").get(getAllProduct).post(createProduct);

// fetch single product, update product and delete product
router.route("/api/product/:id")
  .get(getProduct).put(updateProduct).delete(deleteProduct);

//basic route
router.get("/api/", (req, res) => {
      console.log("I am in basic root");
      res.json({ message: 'Welcome to the Products API' });
});

 

module.exports = router;
