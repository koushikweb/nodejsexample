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

const createProduct = asyncHandler(async (req, res) =>  {
    //get request payload

    console.log(res.data());
}

);

module.exports = {
  getAllProduct,
  createProduct
};
