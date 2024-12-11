/*
Name: Kevin Rodriguez
Date: 11/9/2024
Description: Respiratory Info model representing the Respiratory Info table in the database.  This 
model will associate with other Respiratory Info related information. 
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "RespiratoryInfo",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      assessment_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Assessments",
          key: "id",
        },
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      modified_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modified_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "respiratory_info",
      timestamps: false,
    }
  );
};
