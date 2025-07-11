const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: { // ✅ Changed from gmail
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("userModel", userSchema);
