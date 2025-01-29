/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A User model representing the User table in the database.
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
      id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        autoIncrement: false,
        defaultValue: DataTypes.UUIDV4
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
      }
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );
};
