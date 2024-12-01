/* 
Name: Kevin Rodriguez
Date: 11/30/2024
Description: The Genitournary Info model representing the Genitournary Info table in the database.  This 
model will associate with other Genitournary Info related information. 
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
    },
    {
      tableName: "genitourinary_info",
      timestamps: false
    }
  );
};
