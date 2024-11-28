/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: A Vital Signs model representing the Vital Signs table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "VitalSigns",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
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
      patient_pain_scale_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "PatientPainScale",
          key: "id",
        },
      },
      heart_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      blood_pressure_systolic: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      blood_pressure_diastolic: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      respiratory_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      o2_percent_saturation: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      temperature: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      accu_check_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_date: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      modified_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modified_date: {
        type: "TIMESTAMP",
        allowNull: false,
      },
    },
    {
      tableName: "vital_signs",
      timestamps: false,
    }
  );
};
