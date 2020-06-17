const express = require('express');
const router = express.Router();
const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUsers
} = require('../controllers/user')

const user = (req, res) => res.send(["Rakesh", "Singh"])
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser)
    .get(getUser)



module.exports = router;