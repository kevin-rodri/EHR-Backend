var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
const { generateToken } = require("../middleware/middleware");

router.get('/users', userController.getAllUsers);
router
.route('/users/signIn')
.get([generateToken], userController.signInUser);
router.post('/users', userController.createUser);
router.put('/users/:user_id', userController.updateUser);
router.delete('/users/:user_id', userController.deleteUser);

module.exports = router;
