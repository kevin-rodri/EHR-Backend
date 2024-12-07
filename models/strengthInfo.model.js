/*
Name: Kevin Rodriguez
Date: 12/05/2024
Description: The Strength Info model representing the Strength Info  table in the database.  This 
model is associated with the Neurological Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "StrengthInfo",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      neurological_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "NeurologicalInfo",
          key: "id",
        },
      },
      strength_left_upper_extremity_grip: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_left_upper_extremity_sensation: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_right_upper_extremity_grip: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_left_lower_extremity_strength: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_left_lower_extremity_sensation: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_right_lower_extremity_strength: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      strength_right_lower_extremity_sensation: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
    },
    {
      tableName: "strength_info",
      timestamps: false,
    }
  );
};
