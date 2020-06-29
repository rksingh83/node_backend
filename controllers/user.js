const User = require("../models/User");
const Task = require("../models/Task");
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean();
        if (user) {

            user.tasks = await Task.find({
                developer: user._id
            }).select('task');
            //console.log()
            return res.status(200).json({
                success: true,
                data: user
            })
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }


};
exports.getUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
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

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user)
            return res.status(400).json({
                success: false,
                message: "Invalid User Id"
            });

        return res.status(200).json({
            success: true,
            data: await User.findById(req.params.id),
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    };
}
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user)
            return res.status(400).json({
                success: false,
                message: "Invalid User Id"
            });

        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    };
};