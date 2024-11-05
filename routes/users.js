var express = require('express');
var router = express.Router();
const User = require('../models/User.js');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

//GET method
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error){
    res.status(500).json({message: "Error retrieving users"});
  }
};

//POST method
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user' });
  }
};

//PUT method
const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user' });
  }
};

//DELETE method
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

router.get('/', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
