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
      temperature: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      temperature_source: {
        type: DataTypes.ENUM("TEMPORAL", "RECTAL", "ORAL", "AXILLA"),
        allowNull: false,
      },
      heart_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heart_rate_source: {
        type: DataTypes.ENUM("MONITOR", "MANUAL"),
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
      blood_pressure_source: {
        type: DataTypes.ENUM("MONITOR", "MANUAL"),
        allowNull: false,
      },
      blood_pressure_cuff_location: {
        type: DataTypes.ENUM("RIGHT ARM", "LEFT ARM", "RIGHT LEG", "LEFT LEG"),
        allowNull: false,
      },
      patient_position: {
        type: DataTypes.ENUM("SUPINE", "SITTING", "STANDING"),
        allowNull: false,
      },
      respiratory_rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      o2_percent_saturation: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      oxygen_source: {
        type: DataTypes.ENUM(
          "ROOM AIR",
          "NASAL CANULA",
          "MASK",
          "NON-REBREATHER",
          "VENTURI",
          "SIMPLE MASK",
          "VENT"
        ),
        allowNull: false,
      },
      fiO2_percent: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      liters: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      accu_check_value: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      tableName: "vital_signs",
      timestamps: false,
    }
  );
};
