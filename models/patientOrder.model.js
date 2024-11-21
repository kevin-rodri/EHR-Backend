/* 
Name: Kevin Rodriguez
Date: 11/4/2024 
Description: A Patient Orders model representing the Patient Orders table in the database.
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "PatientOrders",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Patient",
          key: "id",
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
    },
    {
      tableName: "patient_orders",
      timestamps: false,
    }
  );
};