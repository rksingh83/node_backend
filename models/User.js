const mongoose = require("mongoose");
const mongooseValidator = require("mongoose-unique-validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  password: {
    type: String,
    required: [true, "Please Enter password"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Name"],
    unique: [true, "Email All ready exist"],
    index: true,
  },
  role: {
    type: [String],
  },
});
UserSchema.plugin(mongooseValidator);
module.exports = mongoose.model("User", UserSchema);
