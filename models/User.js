/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A User model representing the User table in the database.
*/
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:"); // may have to adjust

const User = sequelize.define("User", {
// liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
  user_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.CHAR(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("STUDENT", "ADMIN", "INSTRUCTOR"),
    defaultValue: "STUDENT",
    allowNull: false,
  },
  section_id: {
    type: DataTypes.CHAR(36),
    allowNull: true,
  },
});

module.exports = User;