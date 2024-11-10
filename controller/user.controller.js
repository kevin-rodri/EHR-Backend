/* 
Name: Dylan Bellinger
Date: 11/9/2024 
Description: User controller for handling requests.
*/
const { User } = require('../models/User.js');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

const signInUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.find(u => u.username === username && u.password === password);
    if (!user) {
      return res.status(400).send('Username or password is incorrect');
    }
    res.status(200).json(user);
  }
  catch (error) {
    console.error(error);
    return res.status(500).send('Error sending credentials');
  }
};

const createUser = async (req, res) => {
  const { username, password, full_name, role, section_id } = req.body;
  try {
    const newUser = await User.create({ username, password, full_name, role, section_id });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating user' });
  }
};

const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { username, password, full_name, role, section_id } = req.body;
  try {
    const [updatedRowsCount, updatedRows] = await User.update(
      { username, password, full_name, role, section_id },
      { where: { user_id }, returning: true }
    );
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(201).json(updatedRows[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating user' });
  }
};

const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const deletedUserCount = await User.destroy({ where: { user_id } });
    if (deletedUserCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

module.exports = {
  getAllUsers,
  signInUser,
  createUser,
  updateUser,
  deleteUser,
};
