/* 
Name: Kevin Rodriguez
Date: 11/30/2024
Description: The assessments model representing the assessments table in the database.  This 
model will associate with other patient assessments. 
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Assessments",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Patient",
          key: "id",
        },
      }
    },
    {
      tableName: "assessments",
      timestamps: false,
    }
  );
};
