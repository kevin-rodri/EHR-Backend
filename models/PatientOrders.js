/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A Patient Orders model representing the Patient Orders table in the database.
*/
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const PatientOrders = sequelize.define("PatientOrders", {
  patient_order_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
  },
  patient_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: "Patient",
      key: "patient_id",
    },
  },
  order_title: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.CHAR(1256),
    allowNull: false,
  },
  created_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  modified_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = PatientOrders;