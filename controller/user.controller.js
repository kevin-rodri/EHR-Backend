/* 
Name: Dylan Bellinger
Date: 11/9/2024 
Description: User controller for handling requests.
Also, per the bcrypt documentation: https://www.npmjs.com/package/bcrypt
*/
const { models } = require("../models");
const { generateToken, hashPassword, comparePassword  } = require('../middleware/middleware');

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

    if (user == null) {
      return res.status(400).send('Username or password is incorrect');
    }

    // should be hashed in the db
    const isPasswordValid = await comparePassword(password, user.password);
    // verifies if password passed in matches the one saved in db
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' + hashedPassword + ' ' + confirnmPassword }); // this should fail if the password to assgin user does not match w/ what's saved in the db 
    }

    const token = generateToken(user);
    res.status(200).json({ token: token, feature_flags: user.feature_flags });
  }
  catch (error) {
    console.error(error);
    return res.status(500).send('Error sending credentials');
  }
};

const createUser = async (req, res) => {
  const { username, password, full_name, role } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await models.User.create({ username, password: hashedPassword, full_name, role});
    
    // this where the feature flags are set based on the role
    if (role === 'ADMIN') {
      newUser.feature_flags = {
        is_admin: true,
      };
    } else if (role === 'INSTRUCTOR') {
      newUser.feature_flags = {
        is_instructor: true,
      };
    } else {
      newUser.feature_flags = {
        is_student: true,
      };
    }

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, full_name, role } = req.body;

  try {
    const user = await models.User.findByPk(id);
    if (user != null) {
      const hashedPassword = await hashPassword(password);
      await user.update({ username, password: hashedPassword, full_name, role });
      res.status(200).json(user);
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
