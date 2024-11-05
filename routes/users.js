var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');

router.get('/users', userController.getAllUsers);
router.get('/users/:user_id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:user_id', userController.updateUser);
router.delete('/users/:user_id', userController.deleteUser);

module.exports = router;
