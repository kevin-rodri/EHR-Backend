/*
Name: Kevin Rodriguez
Date: 11/9/2024
Description: The Oxygen Support model representing the Oxygen Support table in the database.  This 
model is associated with the Respiratory Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "OxygenSupport",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      respiratory_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "RespiratoryInfo",
          key: "id",
        },
      },
      has_continuous_oxygen_pulse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }, 
      has_oxygen_support: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }, 
      oxygen_support_device: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      }, 
      oxygen_flow_rate: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      }
    },
    {
      tableName: "oxygen_support",
      timestamps: false,
    }
  );
};
