const express = require('express');
const {
    createTask,
    getTasks,
    updateTask
} = require('../controllers/task');
const router = express.Router();

router.route('/')
    .post(createTask)
    .get(getTasks);

router.route('/:id')
    .put(updateTask)

module.exports = router;