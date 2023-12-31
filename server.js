const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Something is wrong" + err);
  });

const app = express();

const port = process.env.port || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`sever is running in port ${port}`);
});
