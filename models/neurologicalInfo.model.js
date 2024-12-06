/*
Name: Kevin Rodriguez 
Date: 12/05/24 
Description: Neurological Info model representing the Neurological Info table in the database.  This 
model will associate with other Neurological Info related information. 
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "NeurologicalInfo",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      assessment_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
          model: "Assessments",
          key: "id",
        },
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      modified_by: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modified_date: {
        type: "TIMESTAMP",
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      neurological_note: {
        type: DataTypes.CHAR(1000),
        allowNull: true,
      }
    },
    {
      tableName: "neurological_info",
      timestamps: false,
    }
  );
};
