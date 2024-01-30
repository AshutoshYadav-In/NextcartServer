const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoute = require("./Routes/User.js");
const AdminRoute = require("./Routes/Admin.js");
const cookieParser = require("cookie-parser");
dotenv.config();
// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

  app.use('/api/user', UserRoute);
  app.use('/api/admin' , AdminRoute);
//Server start
app.listen(process.env.PORT,() => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
//Global error middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "An error occurred"});
  next()
});

