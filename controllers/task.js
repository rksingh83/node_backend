const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('developer','name -_id');
        res.status(201).json(tasks)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error.message)
    }
}