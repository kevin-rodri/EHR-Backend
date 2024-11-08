/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A Section model representing the Section table in the database.
*/
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Section = sequelize.define("Section", {
  // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
  section_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
  },
  section_name: {
    type: DataTypes.CHAR(25),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: "User",
      key: "user_id",
    },
  },
  patient_id: {
    type: DataTypes.CHAR(36),
    allowNull: false, 
    references: {
      model: "Patient",
      key: "patient_id",
    },
  },
});

module.exports = Section;