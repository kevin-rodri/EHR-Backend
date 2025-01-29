/* 
Name: Charlize Aponte
Date: 12/7/2024
Description: A WALDO_Diagram model representing the WALDO_Diagram table in the database.
*/
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "WALDO_Diagram",
    {
      id: {
        type: DataTypes.CHAR(36),
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      section_patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "SectionPatient",
          key: "id",
        },
      },
      wound_drain_locations: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      surgical_wound_note: {
        type: DataTypes.CHAR(255),
        allowNull: false,
      },
      pressure_sore_note: {
        type: DataTypes.CHAR(255),
        allowNull: false,
      },
      trauma_wound_note: {
        type: DataTypes.CHAR(255),
        allowNull: false,
      },
      drain_note: {
        type: DataTypes.CHAR(255),
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
      tableName: "waldo_diagram",
      timestamps: false,
    }
  );
};
