/*
Name: Kevin Rodriguez
Date: 12/05/2024
Description: The Consciousness Info model representing the Consciousness Info table in the database.  This 
model is associated with the Neurological Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ConsciousnessInfo",
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
      is_person_conscious: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_person_conscious_of_place: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_person_conscious_of_time: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      alertness_description: {
        type: DataTypes.CHAR(1000),
        allowNull: true,
      },
    },
    {
      tableName: "consciousness_info",
      timestamps: false,
    }
  );
};
