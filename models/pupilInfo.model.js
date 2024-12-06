/*
Name: Kevin Rodriguez
Date: 12/05/2024
Description: The Pupil Info model representing the Pupil Info table in the database.  This 
model is associated with the Neurological Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PupilInfo",
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
      left_pupil_reaction: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      left_pupil_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      right_pupil_reaction: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      right_pupil_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "pupil_info",
      timestamps: false,
    }
  );
};
