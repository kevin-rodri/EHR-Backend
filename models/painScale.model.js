/* 
Name: Kevin Rodriguez
Date: 1/25/2025
Remarks: Controller is used to handle the Medications table in the database.
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PainScale",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      scale_name: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      }
    },
    {
      tableName: "pain_scale",
      timestamps: false,
    }
  );
};
