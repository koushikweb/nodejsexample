const mongoose = require("mongoose");

const productSchema = new mongoose.mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name can not be blank"],
  },
  brand: {
    type: String,
    require: [true, "brand ta is mandatory field"],
  },
  type: {
    type: String,
    require: [false, "product type is mandatory field"],
  },
  price: {
    type: Number,
    require: [true, "price is mandatory field"],
  }, 
  rating: {
    type: Number,
    require: [false, "product type is not mandatory field"],
  },
  warranty_years: {
    type: Number,
    require: [false, "Warranty years is mandatory field"],
  },
  available: {
    type: Boolean,
    require: [true, "Availibility is a mandatory field"],
  },
});

module.exports = mongoose.model("Product", productSchema);
