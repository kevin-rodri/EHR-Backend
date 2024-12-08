/*
Name: Gabby Pierce
Date: 12/7/2024
Description: A PatientHistory model representing the PatientHistory table in the database.
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "PatientHistory",
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
      },
      type: {
        type: DataTypes.ENUM(
          "Primary Admitting Diagnosis",
          "Medical/Surgical History",
          "Social History",
          "Family History"
        ),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1256),
        allowNull: true,
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      modified_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "patient_history", 
      timestamps: false, 
    }
  );
};
