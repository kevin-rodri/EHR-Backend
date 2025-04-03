/* 
Name: Dylan Bellinger
Date: 11/18/2024 
Description: Intake data model.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Intake_Output",
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
      type: {
        type: DataTypes.ENUM(
          "PO",
          "TUBE FEEDING",
          "IV",
          "URINE VOIDED",
          "FOLEY"
        ),
        allowNull: false,
      },
      intake_or_output: {
        type: DataTypes.ENUM("INTAKE", "OUTPUT"),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      date_and_time_taken: {
        type: "TIMESTAMP",
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
      tableName: "intake_output",
      timestamps: false,
    }
  );
};
