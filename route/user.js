const express = require('express');
const router = express.Router();
const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUsers
} = require('../controllers/user')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser)
    .get(getUser)



module.exports = router;