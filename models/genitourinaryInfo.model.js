/*
Name: Kevin Rodriguez
Date: 11/30/2024
Description: The Genitourinary Info model representing the genitourinary_info table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "GenitourinaryInfo",
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
      },
      urinary_assessment: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      urinary_diversion_notes: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      urinary_route: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      urine_color: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      urine_characteristics: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      urine_odor: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      has_dialysis: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      date_of_last_treatment: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dialysis_access_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      has_dialysis_access_dressing_change: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      foley_catheter: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      foley_removed: {
        type: DataTypes.DATE,
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
      tableName: "genitourinary_info",
      timestamps: false,
    }
  );
};
