/*
Name: Charlize Aponte
Date: 11/28/2024
Description: A PatientMedications model representing the Patient_Medications table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PatientMedications",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      section_patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "SectionPatient",
          key: "id",
        },
      },
      medication_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Medications",
          key: "id",
        },
      },
      medication_type: {
        type: DataTypes.ENUM('SCHEDULED','PRN','AT-HOME'),
        allowNull: false
      },
      scheduled_time: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      dose: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      route: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
     dose_frequency: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      created_by: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      modified_by: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      modified_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "patient_medications",
      timestamps: false,
    }
  );
};
