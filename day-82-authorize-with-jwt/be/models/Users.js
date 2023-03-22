const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please provide an Email"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    unique: false,
  },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
