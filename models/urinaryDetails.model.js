/* 
Name: Kevin Rodriguez
Date: 11/30/2024
Description: The Urinary Details model representing the Urinary Details table in the database.  This 
model is associated with the Genitourinary Info model, etc.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "UrinaryDetails",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      genitourinary_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "GenitourinaryInfo",
          key: "id",
        },
      },
      urinary_assessment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urinary_diversion_notes: {
        type: DataTypes.CHAR(1000),
        allowNull: false,
      },
      urinary_route: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urine_color: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      urine_characteristics: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urine_odor: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
    },
    {
      tableName: "urinary_details",
      timestamps: false,
    }
  );
};
