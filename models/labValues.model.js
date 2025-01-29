/* 
Name: Charlize
Date: 12/7/2024 
Description: A Lab_Values model representing the Lab_Values table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "LabValues",
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
        element_name: {
          type: DataTypes.CHAR(5),
          allowNull: false,
        },
        element_value: {
          type: DataTypes.INTEGER,
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
    },
    {
      tableName: "lab_values",
      timestamps: false,
    }
  );
};
