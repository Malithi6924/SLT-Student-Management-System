//password : xee61E6jc8DZunXC
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/userRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

// ✅ Connect MongoDB with a database name
mongoose.connect("mongodb+srv://admin:xee61E6jc8DZunXC@cluster0.zxh41.mongodb.net/userDB")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server running at http://localhost:5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
