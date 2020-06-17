const User = require("../models/User");
exports.getUser =  async (req, res) => {
  return res.status(200).json({
      success:true,
      data: await User.findById(req.params.id)
  })
};
exports.getUsers =  async (req, res) => {
    return res.status(200).json({
        success:true,
        data: await User.find()
    })
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: err.message,
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

exports.updateUser = (req, res) => {
  return res.send(["Rakesh"]);
};

exports.deleteUser = (req, res) => {
  return res.send(["Rakesh"]);
};
