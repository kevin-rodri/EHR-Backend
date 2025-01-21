/*
Name: Kevin Rodriguez
Date: 1/20/25
Remark: A Section Roster model representing the Section Roster table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SectionPatient",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      section_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Section",
          key: "id",
        },
      },
      patient_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Patient",
          key: "id",
        },
      },
      date_assigned: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "section_patient",
      timestamps: false,
    }
  );
};
