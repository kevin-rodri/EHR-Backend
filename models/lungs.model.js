/*
Name: Kevin Rodriguez
Date: 11/9/2024
Description: The Lungs model representing the Lungs table in the database.  This 
model is associated with the Respiratory Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Lungs",
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
      breathing_pattern: {
        type: DataTypes.CHAR(25),
        allowNull: false,
      },
      breathing_effort: {
        type: DataTypes.CHAR(25),
        allowNull: false,
      },
      anterior_right_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_right_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_lower_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_lower_upper_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_right_middle_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_right_middle_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_right_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_right_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      anterior_left_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      posterior_left_lower_lobe: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
    },
    {
      tableName: "lungs",
      timestamps: false,
    }
  );
};
