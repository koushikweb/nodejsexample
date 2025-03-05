const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
     res.status(500).json({message: "Server Error",error: err.message})
  }
});

module.exports = {
  getAllProduct,
};
