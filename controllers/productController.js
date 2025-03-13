const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const productModel = require("../models/productModel");

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
    res.status(200).json(allProducts);
  } catch (err) {
     res.status(500).json({message: "Server Error",error: err.message})
  }
});

const createProduct = asyncHandler(async (req, res) =>  {
     try{
      const payload = req.body;
      //check if same product already exist or not
      const existingProduct = await productModel.findOne({ name: { $regex: new RegExp(`^${payload.name}$`, 'i') } });
      if (existingProduct) {
        res.status(400).send({message : "Product with same name is already exist"});
      }
      
      const newProduct = productModel.create(payload);

      if (newProduct) {
        res.status(201).send({message: "Product created successfully"});
      } else {
        res.status(500).status({message: "There is an issue of creating new product"});
      }
      
     } catch(error) {
      console.log(error);
        res.send({messgae : "Thre is some error"});
     }
});

const getProduct = async() =>  {
    console.log("I am inside get product");
}

const updateProduct = async () =>  {
   try {
    console.log(" I am inside update product");

   }catch (error) {
    res.send({message: "Showing error message"});
   }
}

const deleteProduct = async() =>  {
  console.log(" I am inside delete product api");
}


module.exports = {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
