const mongoose = require("mongoose");

const productSchema = new mongoose.mongoose.Schema({
  title: {
    name: String,
    require: [true, "Name can not be blank"],
  },
  data: {
    type: String,
    require: [false, "Data is not mandatory field"],
  },
});

module.exports = mongoose.model("product", productSchema);
