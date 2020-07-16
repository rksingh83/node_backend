const express = require('express');
const {
    createTask,
    getTasks,
    updateTask,
    getTask
} = require('../controllers/task');
const {
    get
} = require('mongoose');
const router = express.Router();

router.route('/')
    .post(createTask)
    .get(getTasks);

router.route('/:id')
    .put(updateTask)
    .get(getTask)

module.exports = router;