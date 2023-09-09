const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name can not be blank"],
    },
    email: {
      type: String,
      require: [true, "Email can not be blank"],
    },
    phone: {
      type: String,
      require: [true, "Phone can not be blank"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contact", contactSchema);
