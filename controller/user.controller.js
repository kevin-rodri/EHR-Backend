/* 
Name: Dylan Bellinger
Date: 11/9/2024 
Description: User controller for handling requests.
*/
const { models } = require("../models");
const { generateToken } = require('../middleware/middleware');

const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

const signInUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await models.User.findOne({ where: { username }});

    if (!user) {
      return res.status(400).send('Username or password is incorrect');
    }

    const passwordConfirm = user.password;
    // verifies if password passed in matches the one saved in db
    if (passwordConfirm != password) {
      return res.status(401).json({ message: 'Incorrect password' }); // this should fail if the password to assgin user does not match w/ what's saved in the db 
    }
    const token = generateToken(user);
    res.status(200).json({ token });
  }
  catch (error) {
    console.error(error);
    return res.status(500).send('Error sending credentials');
  }
};

const createUser = async (req, res) => {
  const { username, password, full_name, role } = req.body;
  try {
    const newUser = await models.User.create({ username, password, full_name, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating user' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, full_name, role } = req.body;

  try {
    const user = await models.User.findByPk(id);
    if (user != null) {
      await user.update({ username, password, full_name, role });
      res.status(201).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUserCount = await models.User.destroy({ where: { id } });
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
