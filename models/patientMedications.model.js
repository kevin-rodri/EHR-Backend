/*
Name: Charlize Aponte
Date: 11/28/2024
Description: A PatientMedications model representing the Patient_Medications table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("PatientMedications", {
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
      }
    },
    drug_name: {
      type: DataTypes.CHAR(100),
      allowNull: false,
    },
    scheduled_time: {
        type: "TIMESTAMP",
        allowNull: false
    },
    dose: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    route: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    med_name: {
      type: DataTypes.CHAR(100),
      allowNull: false,
    },
    is_scheduled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    created_by: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    created_date: {
      type: "TIMESTAMP",
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    modified_by: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    modified_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
  }, {
    tableName: "patient_medications", 
    timestamps: false
  });
};
