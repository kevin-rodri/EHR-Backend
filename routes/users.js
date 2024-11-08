var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
const { generateToken } = require("../middleware/middleware");

router.get('/users', userController.getAllUsers);
router
.route('/users/:user_id')
.get([generateToken], userController.getUserById);
router.post('/users/signIn', userController.createUser);
router.put('/users/:user_id', userController.updateUser);
router.delete('/users/:user_id', userController.deleteUser);

module.exports = router;
