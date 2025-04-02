/* 
Name: Kevin Rodriguez
Date: 11/27/2024 
Description: A Patient Pain Scale model representing the Patient Pain Scale table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PatientPainScale",
    {
      // liquibase changeset has ids as CHAR(36) and uses the UUID() function to generate them
      // note: DataTypes.UUIDV4 should be the equivalent to the UUID() function in MYSQL
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
      pain_scale_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "PainScale",
          key: "id",
        },
      },
      pain_scale_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pain_scale_text: {
        type: DataTypes.STRING,
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
      tableName: "pain_scale_result",
      timestamps: false,
    }
  );
};
