const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getAllProduct = asyncHandler((req, res) => {
  try {
    const allProducts = Product.find();
    console.log(allProducts);
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getAllProduct,
};
