const Task = require('../models/Task');
const asyncHandler = require('../middleware/asyncHandler');
exports.createTask = asyncHandler(async (req, res, next) => {
    const task = await Task.create(req.body);
    res.status(201).json(task)
});

exports.getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find().populate('developer', 'name -_id');
    res.status(201).json(tasks)

});

//@Desc GET a task by Id  ;
//@Route GET/api/v1/task/id;
//@Access Public
exports.getTask = asyncHandler(async (req, res) => {
    const tasks = await Task.findById(req.params.id).populate('developer', 'name -_id');
    res.status(201).json(tasks)

});

//@Desc Update a Task ;
//@Route PUT/api/v1/task/id;
//@Access Public
exports.updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json(task)
})