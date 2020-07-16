const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs')
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
    enum:['admin','developer'],
    default:'developer'

  },
});
// encrypt the password
UserSchema.plugin(mongooseValidator);
UserSchema.pre('save' , async function(next){
  const salt =  await bcryptjs.genSalt(10);
  console.log(salt ,this.password)
  this.password  = await bcryptjs.hash(this.password,salt)
})
module.exports = mongoose.model("User", UserSchema);
